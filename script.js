// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = '1234567890'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUV'
var lowerVase = 'abcdefghijklmnopqrstuv'
var special = '!@#$%^&*()_+'

function generatePassword() {

  var userChoice = window.prompt("How many characters would you like your password to contain?");

  if (!userChoice) {
    return;
  } 


  if (userChoice < 8 || userChoice > 128) {
    console.log("invalid choice")
    window.alert("Please choose a number between 8 and 128") 
    return;
  }

  // var resultSpecial = 1;

  if (window.confirm("Do you want your password to have special characters?")) {
    console.log("true");
  } else { console.log("false");}
    

  (window.confirm("Do you want your password to have upper case characters?"))
    var resultUpper = "";
  
  (window.confirm("Do you want your password to have lower case characters?"))
    var resultLower = "";
  
  (window.confirm("Do you want your password to have numerical characters?"))
    var resultNumber = "";


    
  // for (let i = 0; i < userChoice; i++) {
  //   result += special.charAt(Math.floor(Math.random() * special.length));
      
    // }



  
 
    
   return;
  }


  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
