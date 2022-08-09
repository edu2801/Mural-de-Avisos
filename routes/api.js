const express = require("express");
const posts = require("../model/posts");
const router = express.Router();
const cors = require("cors");

const options = {
  origin: "https://mural-avisos-edu.herokuapp.com",
};

router.use(cors(options));

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", express.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);

  res.send("Post adicionado");
});

router.delete("/delete", express.json(), (req, res) => {
  let id = req.body.id;
  let index = posts.posts.findIndex((elemento) => elemento.id == id);

  if (index == -1) {
    res.send("Aviso não encontrado no mural");
  } else {
    posts.deletePost(index);
    res.send("Aviso deletado do mural");
  }
});

module.exports = router;
