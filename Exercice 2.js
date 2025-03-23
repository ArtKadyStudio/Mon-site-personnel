document.getElementById('numberInput').addEventListener('input',() => {
    const number = parseFloat(document.getElementById('numberInput').value);
    const resultat = isNaN(number)|| number < 0 ?"invalide": Math.sqrt(number).toFixed(2);
    document.getElementById('result 1').textContent = `Racine carrée : ${resultat}`;
});

document.getElementById('numberInput').addEventListener('input', () => {
    const number = parseFloat(document.getElementById('numberInput').value);
    const rounded = isNaN(number) ? "Invalide" : Math.round(number);
    document.getElementById('result 2').textContent = `Nombre arrondi : ${rounded}`;
});

function generateRandom(){
    const randomNumber = Math.floor(Math.random()* 100) + 1;
    document.getElementById('result 3').textContent = `Nombre aléatoire : ${randomNumber}`;
}

function generateRandomWithRange(){
    const min = parseInt(document.getElementById('minInput').value);
    const max = parseInt(document.getElementById('maxInput').value);
    if (isNaN(min)||isNaN(max)||min >= max) {
        document.getElementById('result 4').textContent = "valeurs invalides";
        return;
    }
    const randomNumber = Math.floor(Math.random() * (max- min + 1)) + min;
    document.getElementById('result 4').textContent = `Nombre aléatoire (min-max) : ${randomNumber}`;
}