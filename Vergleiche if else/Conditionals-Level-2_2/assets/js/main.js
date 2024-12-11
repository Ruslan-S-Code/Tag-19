function checkAirQuality(aqi) {
    let backgroundColor = '';
    let resultText = '';

    aqi = parseInt(aqi); 

    if (aqi <= 50) {
        backgroundColor = 'green';
        resultText = 'Luftqualität: Sehr gut';
    } else if (aqi <= 100) {
        backgroundColor = 'yellow';
        resultText = 'Luftqualität: Mäßig';
    } else if (aqi <= 150) {
        backgroundColor = 'orange';
        resultText = 'Luftqualität: Ungesund';
    } else {
        backgroundColor = 'red';
        resultText = 'Luftqualität: Sehr ungesund';
    }

    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('result').textContent = resultText + ` (AQI: ${aqi})`;
}