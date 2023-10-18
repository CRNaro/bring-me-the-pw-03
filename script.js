// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const uppercase = confirm('Password SHOULD include an uppercase letter.  Click OK to continue');
const lowercase = confirm('Password SHOULD include a lowercase letter.  Click OK to continue');
const numbers = confirm('Password SHOULD include a number letter.  Click OK to continue');
const symbols = confirm('Password SHOULD include a symbol letter.  Click OK to continue');
const keyLength = prompt('Password must be between 8 and 128 characters.  Click OK to continue');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const numeric = '0123456789'
const specialSymbols = '!@#$%^&*'
const multiSelect = [];

function writePassword(length, numbers, uppercase, lowercase, symbols) {


    if (numbers) {
        multiSelect.push('0123456789')
    }

    if (uppercase) {
        multiSelect.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    if (lowercase) {
        multiSelect.push('abcdefghijklmnopqrstuvwxyz')
    }

    if (symbols) {
        multiSelect.push('!@#$%^&*')
    }

    let characters = '';

    for (let i = 0; i < multiSelect.length; i++) {
        characters += multiSelect[i];

    }

    let password = '';

    for (let i = 0; i < length; i++) {
        password += characters.charAt(math.floor(math.random() * characters.length));
    }
    return password;
}


/* var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* writing own code as first attempt */

/*function generatePassword() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz'
}*/