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
//initialize global variables
// var characterTypes = ["lowercase characters", "uppercase characters", "numeric characters", "special characters"];
// var passwordPrompt = [];
var passwordLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
// passwordPrompt.length = 0;  

var passwordLength = prompt("Please enter a number between 8 and 128 to choose your password length.");
 
  // https://www.w3schools.com/js/js_validation.asp
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128.")
      getPasswordOptions();
  } else {
    alert("Password meets length criteria!"); 
  
  // var promptResponse = [];
  // var falseCount = 0;
  // for (let i in characterTypes) {
  //   promptResponse = (confirm(`Would you like your password to contain ${characterTypes[i]}?`));
    if (promptResponse === 'true') {
      passwordPrompt.push(promptResponse);

    } else if (promptResponse === 'false')
      falseCount ++;
      passwordPrompt.push(promptResponse);
      console.log(falseCount);
      console.log(passwordPrompt);
  }
    if (falseCount === 4) {
      alert("Password must container at least one character type. Please try again!");
      getPasswordOptions();
      
    }
    // // https://www.geeksforgeeks.org/how-to-create-an-object-from-two-arrays-in-javascript/
    // function typesRequired(types, string) {
    //   var obj = Object.fromEntries(
    //     types.map((type, index) => [type, string[index]]),
    //   );
    // var charsToInclude = typesRequired(characterTypes, passwordPrompt);
    
    // return obj;
    } generatePassword();
    return passwordLength;

//replace promptResponse variables and string literals with separate vars for each character type to then call later


// Function for getting a random element from an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandom(arr) {
  randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
}


// Function to generate password with user input
function generatePassword() {
console.log(charsToInclude);
}

// character types are known -> charObj
// p/w length is known -> passwordLength - for loop up to passwordLength
// if multiple character types selected, we can just concat the arrays and iterate through them to get a random element
// output pw = concatenated string from each string of random chars - string.substring to define max length

// for (let i = 0; i < passwordLength.length; i++) {
  // if (charObj) {
    
   
  




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
