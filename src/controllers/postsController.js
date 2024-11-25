import {getAllPosts, createPost  }from "../models/postModel.js";

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
