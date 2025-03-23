function handleInput(){
    const input = document.getElementById('inputString').value;
    const length = input.length;
    const substring = input.substring(0,3);
    document.getElementById('lengthResult').textContent = `Longueur : ${length}`;
    document.getElementById('substringResult').textContent = `Sous-chaine : ${substring}`;
}