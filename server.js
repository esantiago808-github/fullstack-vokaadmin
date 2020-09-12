const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const activityRouter = require('./routes/activityRouter');
const bulletinRouter = require('./routes/bulletinRouter');
const userRouter = require('./routes/userRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/activity', activityRouter);
app.use('/bulletin', bulletinRouter);
app.use('/user', userRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

