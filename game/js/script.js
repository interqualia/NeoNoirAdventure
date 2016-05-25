//Variables
var inventory = [];
var inputField = document.querySelector('input');
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
      // Store
      localStorage.setItem("yourName", "Ah, that's right. My name is " + inputField.value + " how could I forget that?");
      // Retrieve
      nameField.innerHTML = localStorage.getItem("yourName");

      inputField.classList.add("invisible");
      document.querySelector('.input-field').classList.add("invisible");
    }
})

function makeAppear(){
    var arrayLength = allAppear.length;
    for (var i = 0; i < arrayLength; i++) {
        allAppear[i].classList.add("opacityAnimation");
    }
}

makeAppear();

