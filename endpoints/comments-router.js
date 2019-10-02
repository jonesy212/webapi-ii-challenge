const express = require("express");

const posts = require('../data/db.js');

const router = express.Router();

 //add an endpoint that returns all the comments(subroutes) for a post

 router.get("/:postId/comments/:id", (req, res) => {
    
    posts.findCommentById(req.params.id)
    .then(comment => {
       res.status(200).json(comment);
    }).catch(er => {
        console.log(er);
        res.status(400).json({
          message: `Error locating comment ${id}`
        });
      });
  });
  
  router.get("/:id/comments", (req, res) => {
    
    posts.findPostComments(req.params.id)
      .then(comment => {
        res.status(201).json(comment)
      }).catch(er => {
        console.log(er);
        res.status(400).json({
          message: `Error finding comment ${id}`
        });
      });
  });
  
  router.post("/:id/comment", (req, res) => {
    
    posts.insertComment(req.comment)
      .then(comment => {res.status(201).json(comment)
      }).catch(er => {
        res.status(400).json({
          message: `Error updating comment ${id}, please try again`
        });
      });
  });
  
  module.exports = router;