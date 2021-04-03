var lowerCaseChar = ['A','b','c']
var upperCaseChar = ['A','B','C']
var numChar = [0,1,2,3,4,5,6,7,8,9]
var specialChar= ['!','@','#']



function generatePassword() {
  var passwordLength = prompt(
    "Please choose a password length of at least 8 characters and no more than 128 characters"
  );
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    alert(
      "That length does not meet the criteria. Please choose a password length of at least 8 characters and no more than 128 characters "
    );return ;
  }
 
//pick random characters 
var userChoices = []

  var confirmLowercase = confirm("Add Lowercase?")
    if (confirmLowercase) {userChoices = userChoices.concat(lowerCaseChar)};
//repeat for next three characters 

//#5 add confirm that they did not say no to all of them
//if all conditions false > return


var charactersResult = ""

for (var i = 0; i <passwordLength; i ++) {
  var singleCharacter = userChoices[Math.floor(Math.random() * userChoices.length)];
  charactersResult += singleCharacter;
}

return charactersResult

}

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
