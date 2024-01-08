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
// init global vars
var passwordOutput = "";
var passwordLength;
//single char arrays
var lowerRequired;
var upperRequired;
var numericRequired;
var specialRequired;
var randomChar;
//concat arrays for all possible password combinations
var lowerUpper = lowerCasedCharacters.concat(upperCasedCharacters);
var lowerSpecial = lowerCasedCharacters.concat(specialCharacters);
var lowerNumeric = lowerCasedCharacters.concat(numericCharacters);
var lowerUpperNumeric = lowerUpper.concat(numericCharacters);
var lowerUpperSpecial = lowerUpper.concat(specialCharacters);
var lowerUpperSpecialNumeric = lowerUpperSpecial.concat(numericCharacters);
var upperSpecial = upperCasedCharacters.concat(specialCharacters);
var upperNumeric = upperCasedCharacters.concat(numericCharacters);
var upperSpecialNumeric = upperSpecial.concat(numericCharacters);
var specialNumeric = specialCharacters.concat(numericCharacters);

// Function to prompt user for password options
function getPasswordOptions() {


passwordLength = Number(prompt("Please enter a number between 8 and 128 to choose your password length."));
 
  // https://www.w3schools.com/js/js_validation.asp
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128.")
      getPasswordOptions();
  } else {
    alert("Password meets length criteria!"); 
    lowerRequired = confirm("Would you like your password to include lowercase characters?");
    upperRequired = confirm("Would you like your password to include uppercase characters?");
    numericRequired = confirm("Would you like your password to include numeric characters?");
    specialRequired = confirm("Would you like your password to include special characters?");

  if (lowerRequired === false && upperRequired === false && numericRequired === false && specialRequired === false) {
      alert("Password must contain at least one character type. Please try again!");
      getPasswordOptions();
  } 
}
generatePassword();
}

// Function for getting a random element from an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandom(arr) {
  randomElement = Math.floor(Math.random() * arr.length);
  return randomChar = arr[randomElement];
}


// Function to generate password with user input
function generatePassword() {
    passwordOutput = "";
// lowercase    
  if (lowerRequired === true && upperRequired === false && numericRequired === false && specialRequired === false) {
    for (let i = 0; i < passwordLength; i++) {
      getRandom(lowerCasedCharacters);
      passwordOutput += randomChar;
    }
// uppercase
  } else if (lowerRequired === false && upperRequired === true && numericRequired === false && specialRequired === false) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(upperCasedCharacters);
        passwordOutput += randomChar;
      }
// numeric
  } else if (lowerRequired === false && upperRequired === false && numericRequired === true && specialRequired === false) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(numericCharacters);
        passwordOutput += randomChar;
    }
// special
  } else if (lowerRequired === false && upperRequired === false && numericRequired === false && specialRequired === true) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(specialCharacters);
        passwordOutput += randomChar;
    } 
// lower + upper
  } else if (lowerRequired === true && upperRequired === true && numericRequired === false && specialRequired === false) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(lowerUpper);
        passwordOutput += randomChar;
    }
// lower + numeric
  } else if (lowerRequired === true && upperRequired === false && numericRequired === true && specialRequired === false) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(lowerNumeric);
        passwordOutput += randomChar;
    }
// lower + special
  } else if (lowerRequired === true && upperRequired === false && numericRequired === false && specialRequired === true) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(lowerSpecial);
        passwordOutput += randomChar;
    } 
// lower + upper + numeric
  } else if (lowerRequired === true && upperRequired === true && numericRequired === true && specialRequired === false) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(lowerUpperNumeric);
        passwordOutput += randomChar;
    }
// lower + upper + special
  } else if (lowerRequired === true && upperRequired === true && numericRequired === false && specialRequired === true) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(lowerUpperSpecial);
        passwordOutput += randomChar;
    }
// lower + upper + special + numeric
  } else if (lowerRequired === true && upperRequired === true && numericRequired === true && specialRequired === true) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(lowerUpperSpecial);
        passwordOutput += randomChar;
    }
// upper + special
  } else if (lowerRequired === false && upperRequired === true && numericRequired === false && specialRequired === true) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(upperSpecial);
        passwordOutput += randomChar;
    } 
// upper + numeric
  } else if (lowerRequired === false && upperRequired === true && numericRequired === true && specialRequired === false) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(upperNumeric);
        passwordOutput += randomChar;
    }
// upper + special + numeric
  } else if (lowerRequired === false && upperRequired === true && numericRequired === true && specialRequired === true) {
      for (let i = 0; i < passwordLength; i++) {
        getRandom(upperSpecialNumeric);
        passwordOutput += randomChar;
    }
// special + numeric
  } else if (lowerRequired === false && upperRequired === false && numericRequired === true && specialRequired === true)
      for (let i = 0; i < passwordLength; i++) {
        getRandom(specialNumeric);
        passwordOutput += randomChar;
      }
writePassword();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = passwordOutput;
}

// Add event listener to generate button and call first function
generateBtn.addEventListener('click', getPasswordOptions);
