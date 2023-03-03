const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

let calculations = [];

app.get('/getCalculator', function (req, res) {
    console.log('In app.get - request for /calculators was made.');
    res.send(calculations)
})

app.post('/pushCalculator', function (req, res) {
    console.log('In app.post - Get a POST request');
    console.log('This is req.body', req.body)
    let pushedCalculation = req.body;
    console.log('this is pushedCalculation, it should be the same as req.body:', pushedCalculation)
    ///////Some calculations and functions!

    res.send(201);
})

app.listen(port, () => {
    console.log('In app.listen - Listening on port:', port)
})