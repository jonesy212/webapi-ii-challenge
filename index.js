const express = require("express");

const postsRouter = require('./endpoints/posts-router.js');
const commentsRouter = require('./endpoints/comments-router.js')


const server = express();

const port = 8000;

server.use('/data/posts', postsRouter);

server.use('/data/posts', commentsRouter);

server.use(express.json());


server.get("/", (req, res) => {
    res.send(`
        <h2> Lambda hubs API</h2>
        <P>Welcome to the Lambda Hubs API</P>
    `);
 });


server.listen(port, () => {
  console.log(`\n***'Hello, welcome to port ${port} ***\n`);
});
