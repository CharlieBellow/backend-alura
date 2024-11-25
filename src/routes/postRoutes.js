import express from "express";
import { listPosts, postNewPost } from "../controllers/postsController.js";

const routes = (app) => {
  // Habilita o middleware para analisar corpos de requisições em formato JSON.
  app.use(express.json());

  // Rota GET para obter todos os posts.
  app.get("/posts", listPosts);
  app.post("/posts", postNewPost)
};

export default routes;
