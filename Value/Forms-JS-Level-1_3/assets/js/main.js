function compareAges(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite
    const birthYear1 = parseInt(document.getElementById('birthYearInput1').value, 10);
    const birthYear2 = parseInt(document.getElementById('birthYearInput2').value, 10);

    if (isNaN(birthYear1) || isNaN(birthYear2)) {
        document.getElementById('result').textContent = 'Bitte gib gültige Geburtsjahre ein!';
        return;
    }

    const ageDifference = Math.abs(birthYear1 - birthYear2);
    document.getElementById('result').textContent = `Der Altersunterschied beträgt ${ageDifference} Jahre.`;
}