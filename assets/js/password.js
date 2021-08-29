// Assignment code here - Password Generator


// Declare variables or arrays below.
// When asked for lower, upper, numeric and character types to include in the password//

let lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericOptions = ["0","1","2","3","4","5","6","7","8","9"];
let specialOptions = ["!","@","#","$","%","&","?","*","+","="];
let generatedPass = [];
let passArray = [];



// List out functions to get random characters from each array
function specialRandom() {
    var randomOutput = specialOptions[Math.floor(Math.random() * specialOptions.length)];
    return randomOutput;
}

function uppercaseRandom() {
    var randomOutput = uppercaseOptions[Math.floor(Math.random() * uppercaseOptions.length)];
    return randomOutput;
}

function lowercaseRandom() {
    var randomOutput = lowercaseOptions[Math.floor(Math.random() * lowercaseOptions.length)];
    return randomOutput;
}

function numberRandom() {
    var randomOutput = numericOptions[Math.floor(Math.random() * numericOptions.lenght)];
    return randomOutput;
}

// When I click the button I'm presented with a series of prompts for password criteria
var charLength = document.querySelector("#charLength").value;
function choosecharLength () {
// Ask user the number of characters they'd like to chose between 8 and 128//
choosecharLength = prompt ("Please choose a password length between 8 and 128 characters.");
if (charLength < 8) {
    //Alert - too short of a password//
    alert ("Character length less than 8 characters. Plese choose between 8 and 128 characters");
choosecharLength();

}else if (charLength > 128) {
    //Alert - too long//
    alert ("Password length greater than 128 characters. Please choose between 8 and 128");
choosecharLength();
}

return charLength;
}









// GET REFERENCES TO THE #generate ELEMENT
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



