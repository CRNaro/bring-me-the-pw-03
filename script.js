// Define variables
const generateBtn = document.querySelector('#generate');
const passwordText = document.querySelector('#password');

// Password function
function generatePassword(length, numbers, uppercase, lowercase, symbols) {

    // My function code - includes all the variations of characers
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numeric = '0123456789';
    const specialSymbols = '!@#$%^&*';
    const multiSelect = [];

    // My if statements - connected to multiSelect so that it can be filled by users choices
    /* the multiSelect is also connected back to the other functions when selected.
    'push()' method is used to add on to the array that is being created when user selects choices */
    if (uppercase) {
        multiSelect.push(uppercaseLetters);
    }
    if (lowercase) {
        multiSelect.push(lowercaseLetters);
    }
    if (numbers) {
        multiSelect.push(numeric);
    }
    if (symbols) {
        multiSelect.push(specialSymbols);
    }



    // 
    let characters = '';
    for (let i = 0; i < multiSelect.length; i++) {
        characters += multiSelect[i];
    }

    //
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

function writePassword() {
    const uppercase = confirm('Password SHOULD include an uppercase letter.  Click OK to continue');
    const lowercase = confirm('Password SHOULD include a lowercase letter.  Click OK to continue');
    const numbers = confirm('Password SHOULD include a number letter.  Click OK to continue');
    const symbols = confirm('Password SHOULD include a symbol letter.  Click OK to continue');
    const keyLength = prompt('Password must be between 8 and 128 characters.  Click OK to continue');

    const password = generatePassword(keyLength, uppercase, lowercase, numbers, symbols);

    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);