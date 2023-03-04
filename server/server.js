const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

let resultsHistory = {
    history: [
   ],
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
    doCalculations(pushedCalculation);
    resultsHistory.history.unshift(pushedCalculation);
    console.log('this is the current results history:', resultsHistory)
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log('In app.listen - Listening on port:', port)
})

function doCalculations(object) {
    let firstNumber = Number(object.fieldOne);
    console.log('this is first number:', firstNumber)

    let secondNumber = Number(object.fieldTwo)
    console.log('this is second number:', secondNumber)

    let sum;
    switch (object.operator) {
        case '+':
            sum = firstNumber + secondNumber;
            break;
        case '-':
            sum = firstNumber - secondNumber;
            break;
        case '*':
            sum = firstNumber * secondNumber;
            break;
        case '/':
            sum = firstNumber / secondNumber;
            break;
            return;
    }
    console.log('this is the sum:', sum)
    object.result = sum;
}