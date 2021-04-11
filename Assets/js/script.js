// Assignment Code
var generateBtn = document.querySelector("#generate");

//User inputs
var confirmLowerCase = true;
var confirmUpperCase = true;
var confirmNumbers = true;
var confirmSymbols = true;
var passLength = 0;
var charArray = "";
var passGen = "";

//Character choices
var symbol = "!#$%&()*+-/:;<=>?@[]~_`^";
var number = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
};

function generatePassword()  {
  //Prompt for character length
  passLength = prompt("How many characters would you like to use for your password? Must be between 8 and 128.");
  //If user does not enter a value they are stopped.
  if (!passLength) {
    alert("Must enter password length.");

  //If user enters a value outside of the prompted ranged they are stopped.
  } else if (passLength < 8 || passLength > 128) {
      alert("Invalid character value");
      generatePassword();

  //If user enters valid character value
    } else {
    confirmLowerCase = confirm("Would you like lowercase letters?");
    confirmUpperCase = confirm("Would you like uppercase letters?");
    confirmNumbers = confirm("Would you like numbers?");
    confirmSymbols = confirm("Would you like special characters?");
  };

  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols) {
    alert("At least one criteria type must be chosen.");
    generatePassword();
  };

  //Creates string based off of confirm selections
  if (confirmLowerCase) {
    charArray = lowerCase;
    console.log(charArray);
  }; 

  if (confirmUpperCase) {
    charArray += upperCase;
    console.log(charArray);
  };

  if (confirmNumbers) {
    charArray += number;
    console.log(charArray);
  };

  if (confirmSymbols) {
    charArray += symbol;
    console.log(charArray);
  };


  //Creates randomized selection of values chosen
  for (var i = 0; i < passLength; i++) {
    passGen += charArray[Math.floor(Math.random() * passLength)];
  };
  console.log(passLength);
  return passGen;
};
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);