$(document).ready(onReady);

function onReady() {
    console.log('On Ready- Page is working!');
    getNumber();

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
        data: {
            //change this data
        }
    }).then(function (response) {
        console.log('In pushNumber - success!', response);
        getNumber();
    }).catch(function (response) {
        alert('In pushNumber - Request failed. Try again later');
    });

}

//function to render items to the DOM.
function rendor() {
    //insert appending code here.
} 