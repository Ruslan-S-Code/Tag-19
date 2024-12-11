function checkShishaEligibility(event) {
    event.preventDefault(); 
    const age = parseInt(document.getElementById('ageInput').value, 10);
    const resultDiv = document.getElementById('result');

    if (isNaN(age) || age < 0) {
        resultDiv.textContent = 'Bitte gib ein gültiges Alter ein!';
        resultDiv.className = 'error';
        return;
    }

    if (age >= 18) {
        resultDiv.textContent = 'Ja, Du kannst Shisha rauchen';
        resultDiv.className = '';
    } else {
        resultDiv.textContent = 'Du darfst noch nicht Shisha rauchen';
        resultDiv.className = 'error';
    }
}