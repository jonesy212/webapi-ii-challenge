const express = require('express');

const posts = require('../data/db.js')

const router = express.Router();

//any url that begins with 
// /general name/posssibly extra general name

//change server.get etc to
//router.get etc

router.get('/', (req, res) => {
  posts
    .find(req.query)
    .then(p => res.status(201).json(p))
    .catch(er => {
      console.log(er)
      res.status(400).json({ 
        message: "error finding posts" 
      })
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    posts
      .findById(id)
      .then(p => res.status(201).json(p))
      .catch(er => {
        console.log(er)
        res.status(400).json({ 
          message: "error finding posts" 
        })
      });
  });
  
  
  router.post("/:id", (req, res) => {
    const posts = req.posts;
    posts
      .insert(posts)
      .then(p => res.status(201).json(p))
      .catch(er => {
        console.log(er)
        res.status(400).json({ 
          message: "error finding posts" 
        })
      });
  });
  
  
  router.put("/:id", (req, res) => {
    const posts = req.posts;
    const id = req.params.id;
    if (Number(id)) {
    posts
      .update(id, posts)
      .then(p => res.status(201).json(p))
      .catch(er => {
        console.log(er)
        res.status(400).json({ 
          message: "error finding posts" 
    })
  });
  }else{
      res.status(499).json(`{message: Error trying to update }`)
  }
  });
  
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (Number(id)) {
      posts
        .remove(id)
        .then(p => res.status(201).json(p))
        .catch(er => {
          console.log(er)
          res.status(400).json({
            message: "Cant delete comments" })
          });
    }else{
        res.status(400).json(`{message: Error trying to delete ${id}, please try again}`)
    }
  });

  //make available for the server to use
  //BY EXPORTING 

  module.exports = router;
  //step 1 step 2 goes up top 
  //AFTER const router
