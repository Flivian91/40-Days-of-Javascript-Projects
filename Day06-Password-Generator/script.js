"use strict";
const passwordBox = document.getElementById("password");
const length = 12;
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", createPassword);

// Define variables for each category
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialSymbols = "!@#$%^&*()-_=+[]{};:'\",.<>?/\\|";

// Combine all categories into one string
var allCharacters =
  uppercaseLetters + lowercaseLetters + numbers + specialSymbols;

// Output the combined string
console.log("All characters: " + allCharacters);
function createPassword() {
  let password = "";
  password +=
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  password +=
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
  while (length > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
}
// function copyPassword() {
//   var passwordBox = document.getElementById("passwordBox"); // Assuming your input element has id "passwordBox"
//   passwordBox.select();
//   document.execCommand("copy");
// }

function copyPassword() {
  // var passwordBox = document.getElementById("passwordBox"); // Assuming your input element has id "passwordBox"
  
  // Select the text inside the input element
  passwordBox.select();

  try {
    // Copy the selected text to the clipboard
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.error('Unable to copy:', err);
  }
}



