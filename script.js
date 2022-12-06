var specChars = ['@', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var numChars = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9']
var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// function to get users password options - this function should return object of users selections
function getUserPasswordOptions() {
  var passwordLength = parseInt(prompt('how many chars'), 10)

  if (passwordLength < 8) {
    alert('must be longer than blah')
    return;
  }
  // if statement for too long 

  var hasSpechChars = confirm('click OK to use spec chars')

  var usersPasswordOptions = {
    passwordLength: passwordLength,
    hasSpechChars: hasSpechChars,
  }

  return usersPasswordOptions
}


// function to get random array element 
function getRandomArrayElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomElement = array[randomIndex]

  return randomElement
}
// write generate password function that takes our input and generates password accordingly

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



// String.fromCharCode