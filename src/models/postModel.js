import connectToDB from "../config/dbConfig.js";

const connection = await connectToDB(process.env.STRING_CONNECTION);

export async function getAllPosts() {
  // Obtém o banco de dados "imersao-instabytes" da conexão estabelecida.
  const db = connection.db("imersao-instabytes");
  // Obtém a coleção "posts" do banco de dados.
  const collection = db.collection("posts");
  // Retorna um array com todos os documentos da coleção.
  return collection.find().toArray();
}

export async function createPost(newPost) {
  const db = connection.db("imersao-instabytes")
  const collection = db.collection("posts")
  return collection.insertOne(newPost)
}