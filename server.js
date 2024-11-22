import express from "express";

const posts = [
  {
    id: 1,
    descricao: "minha foto",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato preto brincando com um novelo de lã",
    imagem: "https://placecats.com/black/300/200",
  },
  {
    id: 3,
    descricao: "Gatinho fofo dormindo em uma caixa",
    imagem: "https://placecats.com/cute/250/300",
  },
  {
    id: 4,
    descricao: "Gato de olhos verdes olhando para a câmera",
    imagem: "https://placecats.com/green/350/250",
  },
  {
    id: 5,
    descricao: "Gato siamês com as patas cruzadas",
    imagem: "https://placecats.com/siamese/400/300",
  },
  {
    id: 6,
    descricao: "Gato com bigodes brancos e olhos azuis",
    imagem: "https://placecats.com/blue/300/200",
  },
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id)
  })
}

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/post/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id)
  res.status(200).json(posts[index]);
})