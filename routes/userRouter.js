const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')   
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the user records to you');
})
.post((req, res) => {
    res.end(`Will add the user: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /user');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /user');
});

userRouter.route('/:userId')
.all((req, res, next) => {         
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the user: ${req.params.userId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operations not supported on /user/${req.params.userId}`);
})
.put((req, res) => {
    res.write(`Updating the user: ${req.params.userId}\n`);
    res.end(`Will update the user: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end(`DELETE operation not supported on /user/${req.params.userId}`);
});

module.exports = userRouter;
