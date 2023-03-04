$(document).ready(onReady);

function onReady() {
    console.log('On Ready- Page is working!');
    $('#addition').on('click', addition(calculation));
    $('#subtraction').on('click', subtraction(calculation));
    $('#multiplication').on('click', multiplication(calculation));
    $('#division').on('click', division(calculation));
    $('#equal').on('click', getNumber());
    $('#clear').on('click', resetInputFields());
    getNumber();

}

let calculation = {
    fieldOne: $('#fieldOne').val(),
    fieldTwo: $('#fieldTwo').val()
}
//function to get a number from server via GET request.
function getNumber() {
    $.ajax({
        method: 'GET',
        url: '/getCalculator' //change this pathway
    }).then(function (response) {
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
function rendor(calculation) {
    $('#solutionOutput').empty()
    console.log('In Rendor');
    for(let item of calculation){
        $('#solutionOutput').append(
            <span>${item.result}</span>
        );
        $('#history').append(
            <li>${item.history}</li>
        )
    }
}

function resetInputFields() {
    let fieldOneInput = $('#fieldOne').val('');
    let fieldTwoInput = $('#fieldTwo').val('');
}

function addition(object){
    object.operator = '+'
}
function subtraction(object){
    object.operator = '-'
}
function multiplication(object){
    object.operator = '*'
}
function division(object){
    object.operator = '/'
}