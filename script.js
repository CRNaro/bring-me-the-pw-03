// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const uppercase = confirm('Password SHOULD include an uppercase letter.  Click OK to continue');
const lowercase = confirm('Password SHOULD include a lowercase letter.  Click OK to continue');
const numbers = confirm('Password SHOULD include a number letter.  Click OK to continue');
const symbols = confirm('Password SHOULD include a symbol letter.  Click OK to continue');
const keyLength = prompt('Password must be between 8 and 128 characters.  Click OK to continue');
const multiSelect = [];

function writePassword(lenth, numbers, uppercase, lowercase, symbols) {

    let characters = '';

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




    var password = generatePassword();
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