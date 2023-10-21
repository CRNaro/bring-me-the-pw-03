// Define variables
const generateBtn = document.querySelector('#generate');
const passwordText = document.querySelector('#password');
const combinedArray = [];

// Password function
function generatePassword(length, numbers, uppercase, lowercase, symbols) {

    // My function code - includes all the variations of characters
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
    } else {
        const index = multiSelect.indexOf(uppercaseLetters);
        if (index !== -1) {
            multiSelect.splice(index, 1);
        }
    }
    if (lowercase) {
        multiSelect.push(lowercaseLetters);
    } else {
        const index = multiSelect.indexOf(lowercaseLetters);
        if (index !== -1) {
            multiSelect.splice(index, 1);
        }
    }
    if (numbers) {
        multiSelect.push(numeric);
    } else {
        const index = multiSelect.indexOf(numeric);
        if (index !== -1) {
            multiSelect.splice(index, 1);
        }
    }
    if (symbols) {
        multiSelect.push(specialSymbols);
    } else {
        const index = multiSelect.indexOf(specialSymbols);
        if (index !== -1) {
            multiSelect.splice(index, 1);
        }
    }
    let combinedArray = multiSelect.join('');

    // Character iteration string
    let characters = multiSelect.join('');
    
   /* for (let i = 0; i < multiSelect.length; i++) {
        characters += multiSelect[i];
    } */

    // Password generation string - using the random math and length chosen 
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
// Popup and questions 
function writePassword() {
    let uppercase = confirm('Password SHOULD include an uppercase letter.  Click OK to continue, or Cancel to exclude.');
    let lowercase = confirm('Password SHOULD include a lowercase letter.  Click OK to continue');
    let numbers = confirm('Password SHOULD include a number letter.  Click OK to continue');
    let symbols = confirm('Password SHOULD include a symbol letter.  Click OK to continue');
    let keyLength = prompt('Password must be between 8 and 128 characters.  Click OK to continue');

    

    // Runs generatePassword with what the user wanted
    const password = generatePassword(keyLength, uppercase, lowercase, numbers, symbols);

    // Puts password element value in so it can be generated
    passwordText.value = password;
}
//  addEventListener is to connect the 'click' of the button and run the generating
generateBtn.addEventListener('click', writePassword);