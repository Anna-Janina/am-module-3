var specChars = ['@', '!']
var numChars = ['0']
var lowercaseChars = ['a']
var uppercaseChars = ['A']

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