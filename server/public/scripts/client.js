$(document).ready(onReady);

function onReady() {
    console.log('On Ready- Page is working!');
    $('#addition').on('click', addition);
    $('#subtraction').on('click', subtraction);
    $('#multiplication').on('click', multiplication);
    $('#division').on('click', division);
    $('#equal').on('click', pushNumber);
    $('#clear').on('click', resetInputFields);
    // getNumber();

}

let calculation = {
    fieldOne: $('#fieldOne').val(),
    fieldTwo: $('#fieldTwo').val(),
}

//function to get a number from server via GET request.
function getNumber() {
    $.ajax({
        method: 'GET',
        url: '/getCalculator'
    }).then((response) => {
        console.log('In getNumber - success!', response);
        render(response);
    }).catch(function (response) {
        alert('In getNumber - Request failed. Try again later');
    });
}

//function to send number to server via POST request.
function pushNumber() {
    insertNumbers();
    $.ajax({
        method: 'POST',
        url: '/pushCalculator', //change this pathway
        data: calculation,
    }).then(function (response) {
        console.log('In pushNumber - success!', response);
        getNumber();
    }).catch(function (response) {
        alert('In pushNumber - Request failed. Try again later');
    });

}

//function to render items to the DOM.
function render(calculation) {
    $('#solutionOutput').empty();
    $('#history').empty();
    console.log('In Rendor', calculation.history);
    for (let i = 0; i < calculation.history.length; i++) {
        console.log('Howdy this is item', calculation.history[i])
        $('#history').append(
            `<li>${calculation.history[i].fieldOne}
            ${calculation.history[i].operator}
            ${calculation.history[i].fieldTwo}=
            ${calculation.history[i].result}</li>`
        )
    }
    $('#solutionOutput').append(
        `<span>${calculation.history[0].result} </span>`
    );
}

function resetInputFields() {
    fieldOneInput = $('#fieldOne').val('');
    fieldTwoInput = $('#fieldTwo').val('');
}

function addition() {
        calculation.operator = '+'
}
function subtraction() {
        calculation.operator = '-'
}
function multiplication() {
        calculation.operator = '*'
}
function division() {
        calculation.operator = '/'
}

function insertNumbers() {
    calculation.fieldOne = $('#fieldOne').val(),
    calculation.fieldTwo = $('#fieldTwo').val()
}