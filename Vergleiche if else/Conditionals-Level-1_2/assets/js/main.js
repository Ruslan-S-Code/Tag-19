function weather(event) {
    event.preventDefault(); 
    const quality = parseInt(document.getElementById('qualityInput').value, 10);

    if (isNaN(quality) || quality < 0 || quality > 10) {
        document.getElementById('result').textContent = 'Bitte gib eine gültige Zahl zwischen 0 und 10 ein!';
        return;
    }

    let result;
    if (quality >= 8 && quality <= 10) {
        result = 'super';
    } else if (quality >= 6 && quality <= 7) {
        result = 'gut';
    } else if (quality >= 3 && quality <= 5) {
        result = 'okay';
    } else {
        result = 'schlecht';
    }

    document.getElementById('result').textContent = `Die Wetterqualität ist: ${result}`;
}