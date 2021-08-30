// Assignment code here - Password Generator

// When asked for lower, upper, numeric and character types to include in the password//
//Data needed to store the arrays

let lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericOptions = ["0","1","2","3","4","5","6","7","8","9"];
let specialOptions = ["!","@","#","$","%","&","?","*","+","="];
let generatedPassword = [];
let passArray = [];


//WHEN I click the button to generate a password THEN I select which criteria to include in the password
// GET REFERENCES TO THE #generate ELEMENT
// Taken from Source Code
var generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");
let randomOutput = document.getElementById("randomOutput");


//WHEN prompted for the length of the password THEN I choose a length between 8 and 128 characters
function generatePassword () {
    let charLength = prompt("Please choose a password length between 8 and 128 characters.");
}
    // ALERT - "Plese choose password between 8 and 128 characters"
    charLength = parseInt(charLength);
    if (charLength >= 8 && charLength <= 128) {
        passArray = [];
        generatedPassword = [];

    


//CONFIRM whether or not to include lower, upper, numeric, and/or special characters
//WHEN I answer each prompt THEN MY input should be validated and at least one character type is selected
let incLowerCaseOptions = confirm("Want to include lowercase characters in your password? Select OK for YES and CANCEL for NO");
let incUpperCaseOptions = confirm("Want to include uppercase characters in your password? Select OK for YES and CANCEL for NO");
let incNumericOptions = confirm("Want to include numbers in your password? Select OK for YES and CANCEL for NO");
let incSpecialOptions = confirm("Want to include special characters in your password? Select OK for YES and CANCEL for NO");

//CONFIRM what the user as selected - CONCAT back to the array
if (incLowerCaseOptions === true) {
    passArray = passArray.concat(lowerCaseOptions); 
}
if (incUpperCaseOptions === true) {
    passArray = passArray.concat(uppercaseOptions);
}
if (incNumericOptions === true) {
    passArray = passArray.concat(numericOptions);
}
if (incSpecialOptions === true) {
    passArray = passArray.concat(specialOptions);
}

    


//WHEN User enters nothing OR a length less than 8 characters OR more than 128 characters then they'll recieve an ALERT
if ((incLowerCaseOptions === false) && (incUpperCaseOptions ===false) && (incNumericOptions === false) && (incSpecialOptions === false)) {
    randomOutput.innerHTML = "Invalid Entry - Please select a character length between 8 and 128 characters.";
} 
} else {
    randomOutput.innerHTML = "Please choose a password length between 8 and 128 characters.";
}


//CREATE loop for the number of characters that the user will select
for (let i = 0; i < charLength; i++) {
    let charArray = Math.floor(Math.random() * passArray.length);
    generatedPassword.push(passArray[charArray]);
 };
    return generatedPassword.join(' ');





    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



