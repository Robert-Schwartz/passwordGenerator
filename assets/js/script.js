var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numChar = [0,1,2,3,4,5,6,7,8,9]
var specialChar= ['!','@','#','$','%','^','&','*','(',')','-','=','+','_',"'",]


//Begin Password Generation
function generatePassword() {

//determine password length from user input
  var passwordLength = prompt(
    "How many characters would you like your password to be?       Please enter a number between 8 and 128."
  );
  passwordLength = parseInt(passwordLength);

//validate input is a number between 8 - 128
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    alert(
      "That length does not meet the criteria. Please choose a password length of at least 8 characters and no more than 128 characters "
    ); return ;
  }
 
//pick character sets from confirm prompts
var userChoices = []

  var confirmLowercase = confirm("Add Lowercase Characters?")
    if (confirmLowercase) {userChoices = userChoices.concat(lowerCaseChar)};

  var confirmUppercase = confirm("Add Uppercase Characters?")
    if (confirmUppercase) {userChoices = userChoices.concat(upperCaseChar)};

  var confirmNum = confirm("Add Number Characters?")
    if (confirmNum) {userChoices = userChoices.concat(numChar)};

  var confirmSpecial = confirm("Add Special Characters?")
    if (confirmSpecial) {userChoices = userChoices.concat(specialChar)};


//validate at least one criteria confirmed
if (userChoices.length === 0) {
  alert("No Characters Selected.  Please select at least one character type for password");
  return 
} 

//generate random characters from character variable arrays
var charactersResult = "";

for (var i = 0; i <passwordLength; i ++) {
  var singleCharacter = userChoices[Math.floor(Math.random() * userChoices.length)];
  charactersResult += singleCharacter;
}

//return characterResult as value for generatePassword function
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
