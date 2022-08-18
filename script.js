// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creates variables with particular character sets stored as a string which can be later accessed
var special = "!@#$%^&*()_+"
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUV'
var lowerCase = 'abcdefghijklmnopqrstuv'
var numbers = '1234567890'


// the function to be called upon on to verify user input choices to determine result of output
function generatePassword() {

  var userChoice = window.prompt("How many characters would you like your password to contain?");

  // if no choice made, this is console logged and there is a prompt to chose a number between 8-128
  if (!userChoice) {
    console.log("no choice made")
    window.alert("Please choose a number between 8 and 128")
    return;
  } 

  // limits valid options as numbers between 8 - 128
  if (userChoice < 8 || userChoice > 128) {
    console.log("invalid choice");
    window.alert("Please choose a number between 8 and 128") ;
    return;
  }

  // stores the boolean value of window.confirm for each question for later use, this is console logged to check which values are stored
  var specialChar = (window.confirm("Do you want your password to have special characters?")) 
    if (specialChar) {
      console.log("true");
    } else { console.log("false");
    }

  var upperChar = (window.confirm("Do you want your password to have upper case characters?"))
    if (upperChar) {
      console.log("true");
    } else { console.log("false");
    }
  
  var lowerChar = (window.confirm("Do you want your password to have lower case characters?"))
    if (lowerChar) {
     console.log("true");
    } else { console.log("false");
    }
    
  var numericalChar = (window.confirm("Do you want your password to have numerical characters?"))
    if (numericalChar) {
     console.log("true");
    } else { console.log("false");
    }
  

    //returns a specific result based on answers of each window.confirm question 
    //all true
  if ((specialChar) && (upperChar) && (lowerChar) && (numericalChar)) {
    let result = "";
    for (let i = 0; i < userChoice; i++) {
      result += (special + numbers + upperCase + lowerCase).charAt(Math.floor(Math.random() * (special + numbers + upperCase + lowerCase).length));
    }
    return result;
    } 
    
    //all except numerical char
  else if ((specialChar) && (upperChar) && (lowerChar) && (!numericalChar)) {
    let result = "";
    for (let i = 0; i < userChoice; i++) {
      result += (special + upperCase + lowerCase).charAt(Math.floor(Math.random() * (special + upperCase + lowerCase).length)); 
    }
    return result;
    }

    // all excpet lower char
  else if ((specialChar) && (upperChar) && (!lowerChar) && (numericalChar)) {
    let result = "";
    for (let i = 0; i < userChoice; i++) {
       result += (special + upperCase + numericalChar).charAt(Math.floor(Math.random() * (special + upperCase + numericalChar).length)); 
     }
    return result;
    }

    //  all except upper char
  else if ((specialChar) && (!upperChar) && (lowerChar) && (numericalChar)) {
    let result = "";
   for (let i = 0; i < userChoice; i++) {
      result += (special + lowerCase + numericalChar).charAt(Math.floor(Math.random() * (special + lowerCase + numericalChar).length)); 
     }
    return result;
    }

    // all except special char
  else if ((!specialChar) && (upperChar) && (lowerChar) && (numericalChar)) {
    let result = "";
    for (let i = 0; i < userChoice; i++) {
        result += (lowerCase + upperCase + numericalChar).charAt(Math.floor(Math.random() * (lowerCase + upperCase + numericalChar).length)); 
      }
      return result;
      }

      // only special and upper char
  else if ((specialChar) && (upperChar) && (!lowerChar) && (!numericalChar)) {
      let result = "";
      for (let i = 0; i < userChoice; i++) {
        result += (special + upperCase).charAt(Math.floor(Math.random() * (special + upperCase).length)); 
      }
      return result;
      }  

      // only special and lower char
  else if ((specialChar) && (!upperChar) && (lowerChar) && (!numericalChar)) {
      let result = "";
      for (let i = 0; i < userChoice; i++) {
        result += (special + lowerCase).charAt(Math.floor(Math.random() * (special + lowerCase).length)); 
      }
      return result;
      } 

      // only special and numerical char
  else if ((specialChar) && (!upperChar) && (!lowerChar) && (numericalChar)) {
      let result = "";
      for (let i = 0; i < userChoice; i++) {
        result += (special + numbers).charAt(Math.floor(Math.random() * (special + numbers).length)); 
      }
      return result;
      } 

      // only upper and lower char
  else if ((!specialChar) && (upperChar) && (lowerChar) && (!numericalChar)) {
      let result = "";
      for (let i = 0; i < userChoice; i++) {
        result += (lowerCase + upperCase).charAt(Math.floor(Math.random() * (lowerCase + upperCase).length)); 
      }
      return result;
      } 

      // only upper and numerical char
  else if ((!specialChar) && (upperChar) && (!lowerChar) && (numericalChar)) {
      let result = "";
      for (let i = 0; i < userChoice; i++) {
        result += (numbers + upperCase).charAt(Math.floor(Math.random() * (numbers + upperCase).length)); 
      }
      return result;
      } 

      // only lower and numerical char
  else if ((!specialChar) && (!upperChar) && (lowerChar) && (numericalChar)) {
      let result = "";
      for (let i = 0; i < userChoice; i++) {
        result += (lowerCase + numbers).charAt(Math.floor(Math.random() * (lowerCase + numbers).length)); 
      }
      return result;
      } 

      // less than two promps are confirmed (the only possible option left), i.e. user has not confirmed enough character inclusions
  else {
    console.log("Not enough choices");
    window.alert("Please choose at least two options.");
    return;
  }

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
