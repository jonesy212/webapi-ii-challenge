const express = require("express");

const comments = require('../data/db.js');

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;

  comments
    .findCommentById(id)
    .then(p => res.status(201).json(p))
    .catch(er => {
      console.log(er);
      res.status(400).json({
        message: `Error finding comment ${id}`
      });
    });
});

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  comments
    .findPostComments(postId)
    .then(p => res.status(201).json(p))
    .catch(er => {
      console.log(er);
      res.status(400).json({
        message: `Error finding comments for ${postId}`
      });
    });
});

router.post("/:id", (req, res) => {
  const comment = req.comment;
  comments
    .insertComment(comment)
    .then(p => res.status(201).json(p))
    .catch(er => {
      res.status(400).json({
        message: `Error updating comment${id}, please try again`
      });
    });
});

module.exports = router;
