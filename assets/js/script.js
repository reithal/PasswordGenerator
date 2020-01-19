// Grabbing the Button elements
var genPassBtn = document.getElementById("generate");
var resetBtn = document.getElementById("reset");
var copyButton = document.getElementById("copyBtn")

// Grabbing the configuration
var passLength = document.getElementById("pwLength");
var upperSwitch = document.getElementById("upperSwitch");
var lowerSwitch = document.getElementById("lowerSwitch");
var numberSwitch = document.getElementById("numberSwitch");
var specialSwitch = document.getElementById("specialSwitch");

// output windows
var pwLengthOutput = document.getElementById("pwLengthOutput");
var passwordValue = document.getElementById("passwordValue");



//arrays of the characters to use for password generation
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Storing as strings in case 2 numbers are randomly selected first and the system adds them.
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!","?", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "@", "/", ":", ";", "<", ">", "=", "[" , "]", "{", "}", "~", "`", "|", "^", "_" ];

//display the default value of the slider
pwLengthOutput.innerHTML = passLength.value;

// dynamicly update the value next to the slider
passLength.oninput = function() { 
  pwLengthOutput.innerHTML = this.value; 
} 

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

// Thank you Nelio
var getRandomElement=function(array) {
  var randomIndex=Math.floor(array.length*Math.random());
  return array[randomIndex];
};


function generatePassword(arr) {
  // storing the password
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
  console.log(password);
  passwordValue.value=password;
}


function copyPassword() {
  passwordValue.select();
  document.execCommand("copy")
}

genPassBtn.addEventListener("click",generatePassword);

copyButton.addEventListener("click", copyPassword)
