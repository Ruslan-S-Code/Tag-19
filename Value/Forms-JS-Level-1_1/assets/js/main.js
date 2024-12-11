function doubleNumber(event) {
    event.preventDefault();
    const inputField = document.getElementById('numberInput');
    const number = parseFloat(inputField.value);
    if (isNaN(number)) {
        document.getElementById('result').textContent = 'Bitte gib eine gültige Zahl ein!';
        return;
    }
    const doubled = number * 2;
    document.getElementById('result').textContent = `Das Ergebnis ist: ${doubled}`;
}