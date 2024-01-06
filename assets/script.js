// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//-- arrays end --

// Function to prompt user for password options
function getPasswordOptions() {

  var passwordSpecial = false;
  var passwordNumeric = false;
  var passwordLower = false;
  var passwordUpper = false;

  var passwordLength = prompt("Please enter a number between 8 and 128 to choose your password length.");
 
  // https://www.w3schools.com/js/js_validation.asp
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128.")
      getPasswordOptions();
  } else {
    alert("Password meets length criteria!"); 
    return passwordLength;
  }

  // var passwordContains = confirm(`Would you like your password to contain ${string}?`)

}



// Function for getting a random element from an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandom(arr) {
  randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
}


// Function to generate password with user input
function generatePassword() {
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
generateBtn.addEventListener('click', getPasswordOptions);
