// Assignment code here

// Global Variables
// When asked for lower, upper, numeric and character types to include in the password//

var lowercaseOptions = "abcdefghijklmnopqrstuvwxyz";
var uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericOptions= "0123456789";
var specialOptions = "!@#$%&?*+=";
// Acceptance Criteria - GIVEN I need a new, secure password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

