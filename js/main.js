function displayDetails() {
    const txt1 = document.getElementById('nome').value;
    const ende1 = document.getElementById('endereço').value;
    const year1 = document.getElementById('ano').value;
    const output = document.getElementById('output1');
    const divContainer = document.querySelector('#output1');
    const divLoginBox = document.querySelector('.form-box');
    
    var date = new Date();
    var year2 = date.getFullYear();

    var year = year2 - year1;

    if (!txt1 || !year1 || !ende1) {
        window.alert("Preencha todos os campos");
    } else if (year < 18) {
        window.alert("Você precisa ter acima de 18 anos de idade.")
    } else {
        output.innerHTML = 'Seja bem-vinde, ' +txt1+ '. Você tem ' +year+ ' anos de idade, e seu endereço é ' +ende1+ '.';
        divContainer.style.display = 'inline-block';
        divLoginBox.style.height = '500px';
    }
}
