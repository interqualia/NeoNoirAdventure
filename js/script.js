//Variables
var inventory = [];
var inputContainer = document.querySelector('.input-field')
var inputField = inputContainer.querySelector('input')
var nameField = document.querySelector(".result");
var allAppear = document.querySelectorAll('.appear, .appear-2, .appear-3')

//Checked of storage mogelijk is in browser
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}

//Wanneer je op enter drukt saved hij de naam die je hebt gegeven
inputField.addEventListener('keydown', function(saveName) {
    if (saveName.keyCode === 13) {
      var welcomeText = "Ah, that's right. My name is " + inputField.value + " how could I forget that?";
      // Store
      localStorage.setItem("yourName", welcomeText);
      // Retrieve
      nameField.innerHTML = welcomeText;

      inputContainer.classList.add("invisible");
    }
})

//M
function makeAppear(){
    var arrayLength = allAppear.length;
    for (var i = 0; i < arrayLength; i++) {
        allAppear[i].classList.add("opacityAnimation");
    }
}

makeAppear();