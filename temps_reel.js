function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    const heureActuelle = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').value = heureActuelle;
    setTimeout(updateClock, 1000);
}
updateClock();