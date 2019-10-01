const express = require("express");
const data = require("./data/db");
const server = express();

const port = 8000;

server.use(express.json());

server.get("/:", (req, res) => {
  data
    .find()
    .then(p => res.status(201).json(p))
    .catch(er => res.status(4000).json({ message: "error finding posts" }));
});

server.get("/:id", (req, res) => {
  const id = req.params.id;

  data
    .findById(id)
    .then(p => res.status(201).json(p))
    .catch(er => res.status(4000).json({ message: "error finding posts" }));
});

server.get("/comment/:id", (req, res) => {
  const id = req.params.id;

  data
    .findCommentById(id)
    .then(p => res.status(201).json(p))
    .catch(er => res.status(4000).json({ message: "error finding posts" }));
});

server.get("/comments", (req, res) => {
  data
    .findPostComments()
    .then(p => res.status(201).json(p))
    .catch(er => res.status(4000).json({ message: "error finding posts" }));
});

server.post("/:id", (req, res) => {
  const posts = req.posts;
  data
    .insert(posts)
    .then(p => res.status(201).json(p))
    .catch(er => res.status(4000).json({ message: "error finding posts" }));
});

server.post("/comment/:id", (req, res) => {
  const comment = req.comment;
  data
    .insertComment(comment)
    .then(p => res.status(201).json(p))
    .catch(er => res.status(4000).json({ message: "error finding posts" }));
});

server.put("/:", (req, res) => {
  const posts = req.posts;
  const id = req.params.id;
  if (Number(id)) {
  data
    .update(id, posts)
    .then(p => res.status(201).json(p))
    .catch(er => res.status(4000).json({ message: "error finding posts" }));
}else{
    res.status(499).json(`{message: Error trying to update }`)
}
});

server.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (Number(id)) {
    data
      .remove(id)
      .then(p => res.status(201).json(p))
      .catch(er => res.status(4000).json({ message: "Cant delete comments" }));
  }else{
      res.status(400).json(`{message: Error trying to delete ${id}, please try again}`)
  }
});

server.listen(port, () => {
  console.log(`\n***'Hello, welcome to port ${port} ***\n`);
});
