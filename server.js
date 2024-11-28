import express from "express";
import routes from "./src/routes/postRoutes.js";


// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente.


const app = express();
app.use(express.static("uploads"))

routes(app)
// Habilita o middleware para analisar corpos de requisições em formato JSON.
app.use(express.json());

// Inicia o servidor Express e escuta por requisições na porta 3000.
app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});

// Função assíncrona para obter todos os posts da coleção "posts" no banco de dados "imersao-instabytes".




