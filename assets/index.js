//create Javascript to enable password generator to work
//create a variable that connects to the inputs id - password
let password=document.getElementById("password");
console.log(password);
//create a function for generating the password

//in order to adapt password generator based on project requirements I have edited out the original variable array and will create a new one
//for characters using math.floor and math random. but first we need to set up the password length field which will be adjusted by user input.
let passwordLength = 0;
let includeLC = false;
let includeUC = false;
let includeSym = false;
let includeNum = false;
let validCharacters = "";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!£%^&*()_+-={}[]:@~#<>?,./|";


function promptForLength() {
    passwordLength = parseInt (prompt("Please define number of required Characters( Minimum 10, Maximum 64"));
    if (passwordLength <= 10 || passwordLength >= 64 || Number.isNaN(passwordLength)){
        alert("Password length must be between 10-64 characters, Please Try again");
        passwordLength = 0;
        promptForLength();
    }
}

function promptForCharacterTypes() {
    includeLC = confirm("Press OK to include lowercase characters in the password");
    if (includeLC === true){
        validCharacters += lowerCase;
    }
    includeUC = confirm("Press OK to include uppercase characters in the password");
    if (includeUC === true){
        validCharacters += upperCase;
    }
    includeNum = confirm("Press OK to include numbers in the password");
    if (includeNum === true){
        validCharacters += numbers;
    }
    includeSym = confirm("Press OK to include special symbols in the password");
    if (includeSym === true){
        validCharacters += symbols;
    }
    if (includeLC === false && 
        includeUC === false &&
        includeNum === false &&
        includeSym === false){
            alert ("At least one character type needs to be selected");

            promptForCharacterTypes();
        }

}

function generatePassword() {
 //create a variable that contains all letters/special symbols/ numbers that the random password can be made from   
   let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!£%^&*()_+-={}[]:@~#<>?,./|";

   
console.log(characters);
// note had to remove some symbols as they have effect on javascript such as $;'.
// we have been asked to give the password a length of 10 -64  characters depending on user input therefore i will create the following variable.
promptForLength();
console.log(passwordLength);
// Loop if answer is outside the parameters 

    // Repeat back how many characters the user will have  
    alert(`Your password will have ${passwordLength} characters`);

    promptForCharacterTypes();    //define a variable for password in the function to equal the symbols from the string in the variable characters
let password = "";
console.log(password);

// create the random pass word using a for loop and the Math.random function
/*  1) change all uses of the word index to i
    2) set index to be less than or equal to the variable password length to ensure the generated password has no more than 12 characters
    3) i ++ means that the loop will continue to go from 1 - 12 to grab a symbol as the statement i <=passwordLength is true (once the expression becomes false by reaching 13 or above the loop will cease to funbction.)
    4) make a variable - random characters that is equal to the Math.floor function which is composed of the math.random function picking any character from along the length of the characters variable string element.
    5) finish the for loop by using the += operator to add the value of characters substring to the password variable
*/
console.log("password Length = ", passwordLength);
console.log("lowercase = ", includeLC);
console.log("uppercase = ", includeUC);
console.log("password numbers = ", includeNum);
console.log("password symbols = ", includeSym);
for (let i = 0; i <= passwordLength - 1; i++) {
    let  randomCharacter = Math.floor(Math.random() * validCharacters.length);
    password += validCharacters.substring(randomCharacter,randomCharacter +1);
    
}
// assign the password to the input box . This will allow the pass word to be seen in it.
        document.getElementById("password").value = password;
}
// lastly create a function to allow the copy button to copy the random generated password on to the clipboard for the user.
function copyPassword() {
    // then Get the text field
    let copyText = document.getElementById("password");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the password: " + copyText.value);
  }
  /*function for copy button and understanding of process from w3school*/