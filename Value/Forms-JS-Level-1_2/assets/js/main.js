function calculateAge(event) {
    event.preventDefault(); 
    const inputField = document.getElementById('birthYearInput');
    const birthYear = parseInt(inputField.value, 10);
    const currentYear = new Date().getFullYear();

    if (isNaN(birthYear) || birthYear > currentYear) {
        document.getElementById('result').textContent = 'Bitte gib ein gültiges Geburtsjahr ein!';
        return;
    }

    const age = currentYear - birthYear;
    document.getElementById('result').textContent = `Du bist ${age} Jahre alt.`;
}