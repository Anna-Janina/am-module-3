var specialCharacters = ['@', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var numberCharacters = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function getUserPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters will the password be? (Please enter 8 - 128 characters)"), 10)
  
if (passwordLength < 8) {
      alert("Password must be at least 8 characters!")
      return;
    }

if (passwordLength > 128) {
      alert("Password can't be more than 128 characters long.");
      return;
    }

var hasSpechChars = confirm('click ok if you would like to use special characters in your password')
var hasUpperCase = confirm('click ok if you would like to use upper case characters in your password')
var hasLowerCase = confirm('click ok if you would like to use lower case characters in your password')
var hasNumbs = confirm('click ok if you would like to use numbers in your password')

  var usersPasswordOptions = {
    passwordLength: passwordLength,
    hasSpechChars: hasSpechChars,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNumbs: hasNumbs,
  }

  return usersPasswordOptions;
}

function getRandomArrayElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length)

  var randomElement = array[randomIndex]

  return randomElement
}

function generatePassword() {
  var userOptions = getUserPasswordOptions();

  var passwordResult = []


  var potentialChars = []

  var confirmedChars = []


  if (userOptions.hasSpechChars) {
    potentialChars = potentialChars.concat(specialCharacters)
    confirmedChars.push(getRandomArrayElement(specialCharacters))
  }
  if (userOptions.hasNumbs) {
    potentialChars = potentialChars.concat(numberCharacters)
    confirmedChars.push(getRandomArrayElement(numberCharacters))
  }
  if (userOptions.hasLowerCase) {
    potentialChars = potentialChars.concat(lowerCaseCharacters)
    confirmedChars.push(getRandomArrayElement(lowerCaseCharacters))
  }
  if (userOptions.hasUpperCase) {
    potentialChars = potentialChars.concat(upperCaseCharacters)
    confirmedChars.push(getRandomArrayElement(upperCaseCharacters))
  }

  for (i = 0; i < userOptions.passwordLength; i++) {
    var potentialChar = getRandomArrayElement(potentialChars)
    passwordResult.push(potentialChar)
  }

  for (i = 0; i < confirmedChars.length; i++) {
  passwordResult[i] = confirmedChars[i]
  }

  return passwordResult.join('')

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

