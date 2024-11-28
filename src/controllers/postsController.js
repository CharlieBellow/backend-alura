import fs from "fs"
import generateDescriptionWithGemini from "../services/geminiServices.js"
import { getAllPosts, createPost, updatePost } from "../models/postModel.js";

export async function listPosts(req, res) {
  // Chama a função para obter todos os posts.
  const posts = await getAllPosts();

  // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
  res.status(200).json(posts);
}

export async function postNewPost(req, res) {
  
  const newPost = req.body;
  try {
    const createdPost = await createPost(newPost)
    res.status(200).json(createdPost)
  } catch (error){
    console.error("não foi possivel criar o post", error.message)
    res.status(500).json({"Error": "Falha na requisição"})
}
  
}

export async function uploadImage(req, res) {
  
  const newPost = {
    description: "",
    imgUrl: req.file.originalname,
    alt: ""
  }
  try {
    const createdPost = await createPost(newPost)
    const updatedImage = `uploads/${createdPost.insertedId}.png`

    fs.renameSync(req.file.path, updatedImage)

    res.status(200).json(createdPost)
  } catch (error){
    console.error("não foi possivel criar o post", error.message)
    res.status(500).json({"Error": "Falha na requisição"})
}
  
}


export async function updateNewPost(req, res) {
  
  const id = req.params.id;
  const urlImage = `http://localhost:3000/${id}.png`

  try {
    const imageBuffer = fs.readFileSync(`uploads/${id}.png`)
    const description = await generateDescriptionWithGemini(imageBuffer)
    
    const post = {
      imgUrl: urlImage,
      description: description,
      alt: req.body.alt,
    }
    const updatedPost = await updatePost(id, post)
    res.status(200).json(updatedPost)
  } catch (error){
    console.error("não foi possivel criar o post", error.message)
    res.status(500).json({"Error": "Falha na requisição"})
}
  
}