function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const emailValidatorRegex = /^[a-z0-9._%+-]{1,64}@[a-z0-9.-]{1,255}\.[a-z]{2,}$/;
    
    if (emailValidatorRegex.test(email)) {
        document.getElementById('validationMessage').innerText = 'Email is valid';
    } else {
        document.getElementById('validationMessage').innerText = 'Please enter a valid email';
    }
}