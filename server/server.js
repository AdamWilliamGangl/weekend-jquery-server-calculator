const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

let resultsHistory = {
    history: [{
        fieldOne: '',
        fieldTwo: '',
        operator: '',
        result: ''
    }],
};

app.get('/getCalculator', (req, res) => {
    console.log('In app.get - request for /getCalculators was made.');
    console.log('res.send will send the following object:', resultsHistory)
    res.send(resultsHistory);
})

app.post('/pushCalculator', function (req, res) {
    console.log('In app.post - Get a POST request');
    console.log('This is req.body', req.body)
    let pushedCalculation = req.body;
    console.log('this is pushedCalculator, it should be the same as req.body:', pushedCalculation)
    ///////Some calculations and functions!

    resultsHistory.history.push();//whatever the final object result is goes in here.
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log('In app.listen - Listening on port:', port)
})