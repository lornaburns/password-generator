let numCharacters = 8
let choiceArray = []
let specialCharArray = ["?", "!", "@", "#", "$", "%", "&", "^", "*", "(", ")"];
let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"]; 
let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  let correctPrompts = getPrompts();
  let passwordText = document.querySelector("#password");
    if (correctPrompts) {
      let newPassword = generatePassword();
      passwordText.value = newPassword;
    } else {
    passwordText.value = "";
    }
  }

function generatePassword () {
  let password = "";
  for(let i = 0; i < numCharacters; i++) {
    let randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts () {
  choiceArray = [];

  numCharacters = parseInt(prompt("How many characters do you want your password to include? (8-128)", "Enter number"));
    if(isNaN(numCharacters) || numCharacters < 8 || numCharacters >128) {
      alert("Please enter a number between 8 and 128");
      return false;
    }
  if (confirm("Would you like your password to include lowercase letters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  
  if (confirm("Would you like your password to include uppercase letters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }

  if (confirm("Would you like your password to include special characters?")) {
    choiceArray = choiceArray.concat(specialCharArray);
  }

  if (confirm("Would you like your password to include numbers?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}


