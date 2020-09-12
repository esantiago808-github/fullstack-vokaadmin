const express = require('express');
const bodyParser = require('body-parser');

const activityRouter = express.Router();

activityRouter.use(bodyParser.json());

activityRouter.route('/')   
.all((req, res, next) => {         
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the activity records to you');
})
.post((req, res) => {
    res.end(`Will add the activity: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /activity');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /activity');
});

activityRouter.route('/:activityId')
.all((req, res, next) => {         
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the activity: ${req.params.activityId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /activity/${req.params.activityId}`);
})
.put((req, res) => {
    res.write(`Updating the activity: ${req.params.activityId}\n`);
    res.end(`Will update the activity: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end(`DELETE operation not supported on /activity/${req.params.activityId}`);
});

module.exports = activityRouter;
