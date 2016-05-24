//Variables
var inventory = [];
var inputField = document.querySelector('input');
var nameField = document.querySelector(".result");

//Checked of storage mogelijk is in browser
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}

//Wanneer je op enter drukt saved hij de naam die je hebt gegeven
function rememberName(){
    inputField.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      // Store
      localStorage.setItem("yourName", "Ah, that's right. My name is " + inputField.value + " how could I forget that?");
      // Retrieve
      nameField.innerHTML = localStorage.getItem("yourName");

      inputField.classList.add("invisible");
      document.querySelector('.input-field').classList.add("invisible");
    }
    })
}

rememberName();