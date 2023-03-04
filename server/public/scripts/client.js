$(document).ready(onReady);

function onReady() {
    console.log('On Ready- Page is working!');
    $('#addition').on('click', addition);
    $('#subtraction').on('click', subtraction);
    $('#multiplication').on('click', multiplication);
    $('#division').on('click', division);
    $('#equal').on('click', pushNumber);
    $('#clear').on('click', resetInputFields);
    getNumber();

}

let calculation = {
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
    $('#solutionOutput').empty()
    console.log('In Rendor');
    for (let item in calculation.history) {
        $('#history').append(
            `<li>${item.fieldOne}${item.operator}${item.fieldtwo}=${item.result}</li>`
        )
    }
    $('#solutionOutput').append(
        `<span>${calculation.history[0].result} </span>`
    );
}

function resetInputFields() {
    let fieldOneInput = $('#fieldOne').val('');
    let fieldTwoInput = $('#fieldTwo').val('');
}

function addition() {
    let calculation = {
        fieldOne: $('#fieldOne').val(),
        fieldTwo: $('#fieldTwo').val(),
        operator: '+'
    };
    pushNumber(calculation)
}
function subtraction() {
    let calculation = {
        fieldOne: $('#fieldOne').val(),
        fieldTwo: $('#fieldTwo').val(),
        operator: '-'
    };
    pushNumber(calculation)
}
function multiplication() {
    let calculation = {
        fieldOne: $('#fieldOne').val(),
        fieldTwo: $('#fieldTwo').val(),
        operator: '*'
    };
    pushNumber(calculation)
}
function division() {
    let calculation = {
        fieldOne: $('#fieldOne').val(),
        fieldTwo: $('#fieldTwo').val(),
        operator: '/'
    };
    pushNumber(calculation)
}