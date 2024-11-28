import express from "express";
import multer from "multer"
import cors from "cors"
import { listPosts, postNewPost, uploadImage, updateNewPost } from "../controllers/postsController.js";

const corsOptions = {
  origin: "https://localhost:8000",
  optionsSuccessStatus: 200
}
// windows:
/* const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cd) {
    cb(null, file.originalname);
  }
})
const upload = multer({ dest: "./uploads", storage }) */


const upload = multer({ dest: "./uploads"})



const routes = (app) => {
  // Habilita o middleware para analisar corpos de requisições em formato JSON.
  app.use(express.json());

  app.use(cors(corsOptions))

  // Rota GET para obter todos os posts.
  app.get("/posts", listPosts);
  app.post("/posts", postNewPost)
  app.post("/upload", upload.single("image"), uploadImage)

  app.put("/upload/:id", updateNewPost)
};

export default routes;
