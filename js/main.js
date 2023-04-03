function displayDetails() {
    var txt1 = document.getElementById('nome').value;
    var ende1 = document.getElementById('endereço').value;
    var year1 = document.getElementById('ano').value;

    var date = new Date();
    var year2 = date.getFullYear();

    var year = year2 - year1;
    
    if(!txt1 || !ende1 || !year1) {
        alert("Por favor, preencha todos os campos");
        return;
    }

    document.getElementById('output1').innerHTML = 'Seja bem-vinde, ' +txt1+ '. Você tem ' +year+ ' anos de idade, e seu endereço é ' +ende1+ '.';
}

const divContainer = document.querySelector('#output1');
const divLoginBox = document.querySelector('.login-box');

let divDisplay = function() {
    divContainer.style.display = 'inline-block';
    divLoginBox.style.height = '500px';
}