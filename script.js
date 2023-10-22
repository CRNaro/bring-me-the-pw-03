
const generateBtn = document.querySelector('#generate');
const passwordText = document.querySelector('#password');

// Password function
function generatePassword(length, characters) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

// Popup and questions 
function writePassword() {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numeric = '0123456789';
    const specialSymbols = '!@#$%^&*';
    let combinedArray = [];

    let uppercase = confirm('Password SHOULD include an uppercase letter.  Click OK to continue, or Cancel to exclude.');
    let lowercase = confirm('Password SHOULD include a lowercase letter.  Click OK to continue');
    let numbers = confirm('Password SHOULD include a number letter.  Click OK to continue');
    let symbols = confirm('Password SHOULD include a symbol letter.  Click OK to continue');
    let keyLength = prompt('Password must be between 8 and 128 characters.  Click OK to continue');

    if (uppercase) {
        combinedArray.push(uppercaseLetters);
    }
    if (lowercase) {
        combinedArray.push(lowercaseLetters);
    }
    if (numbers) {
        combinedArray.push(numeric);
    }
    if (symbols) {
        combinedArray.push(specialSymbols);
    }

    if (combinedArray.length === 0) {   
        alert('No options were selected.  Defaulting to use all options.');
        combinedArray.push(uppercaseLetters, lowercaseLetters, numeric, specialSymbols);
    }

    const characters = combinedArray.join('');

    // Runs generatePassword with what the user wanted
    const password = generatePassword(keyLength, characters);

    // Puts password element value in so it can be generated
    passwordText.value = password;
}

//  addEventListener is to connect the 'click' of the button and run the generating
generateBtn.addEventListener('click', writePassword);
