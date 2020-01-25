/* 
  script.js file used for the Password Generator application. 
  Author: Carlos Mazon
  Date: Jan 2020
*/

// Grabbing the Button elements
var genPassBtn = document.getElementById("generate");
var resetButton = document.getElementById("reset");
var copyButton = document.getElementById("copyBtn")


// Grabbing the configuration elements to be selected by the user.
var passLength = document.getElementById("pwLength");
var upperSwitch = document.getElementById("upperSwitch");
var lowerSwitch = document.getElementById("lowerSwitch");
var numberSwitch = document.getElementById("numberSwitch");
var specialSwitch = document.getElementById("specialSwitch");


// Grabbing elements for the output values
var pwLengthOutput = document.getElementById("pwLengthOutput");
var passwordValue = document.getElementById("passwordValue");



//Arrays of the characters to use for password generation
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Storing as strings in case 2 numbers are randomly selected first and the system adds them.
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!","?", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "@", "/", ":", ";", "<", ">", "=", "[" , "]", "{", "}", "~", "`", "|", "^", "_", '"', "\\" ];

//display the default value of the slider
pwLengthOutput.innerHTML = passLength.value;

// dynamicly update the value next to the slider
passLength.oninput = function() { 
  pwLengthOutput.innerHTML = this.value; 
} 

/**
 * Create array of parameter switches for password generation.
 *
 * @returns array  list of options selected by the user.
 */
function checkConfig() {
  var options=[];
  if(upperSwitch.checked){
    options.push("u");
  }
  if(lowerSwitch.checked){
    options.push("l");
  }
  if(numberSwitch.checked){
    options.push("n");
  }
  if(specialSwitch.checked){
    options.push("s");
  }
  return options;
};




/**
 *Thank you Nelio for the demonstration. Returns a random element from array.
 * @param array
 * @returns {*} random element
 */
var getRandomElement=function(array) {
  var randomIndex=Math.floor(array.length*Math.random());
  return array[randomIndex];
};

/**
 * Generates a random string of characters based on user input.
 *
 */
function generatePassword() {

  var password = "";
  var options = checkConfig();

  if (options.length == 0)
  {
    alert("Please select at least one character option.");
    return;
  }

  for (i=0; i<passLength.value; i++) {
    var type = getRandomElement(options);
   
    if(type == "u")
    {
      password = password + getRandomElement(upperLetters);
    }
    else if (type == "l") {
      password = password + getRandomElement(lowerLetters);
    }
    else if (type == "n") {
      password = password + getRandomElement(numbers);
    }
    else if (type == "s") {
      password = password + getRandomElement(specialCharacters);
    }
  }
  
  passwordValue.value=password;
}

/**
 * Copies the password value in the client's 'clipboard'
 *
 */
function copyPassword() {

  passwordValue.select();
  document.execCommand("copy")
}


// Listeners for the buttons.
genPassBtn.addEventListener("click",function(event) {
  event.preventDefault();
  generatePassword();
});
copyButton.addEventListener("click", function(event) {

  copyPassword()
});

resetButton.addEventListener("click", function(){
 passwordValue.value="";
});

