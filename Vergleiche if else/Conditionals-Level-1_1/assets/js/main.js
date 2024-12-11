function checkAdult(event) {
    event.preventDefault();
    const age = parseInt(document.getElementById('ageInput').value, 10);

    if (isNaN(age) || age < 0) {
        document.getElementById('result').textContent = 'Bitte gib ein gültiges Alter ein!';
        return;
    }

    const isAdult = adult(age);
    document.getElementById('result').textContent = isAdult ? 'Volljährig' : 'Minderjährig';
}

function adult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}