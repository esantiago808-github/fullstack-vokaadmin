const express = require('express');
const bodyParser = require('body-parser');

const bulletinRouter = express.Router();

bulletinRouter.use(bodyParser.json());

bulletinRouter.route('/')   
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the bulletin records to you');
})
.post((req, res) => {
    res.end(`Will add the bulletin: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /bulletin');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /bulletin');
});

module.exports = bulletinRouter;
