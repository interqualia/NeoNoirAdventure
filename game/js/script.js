//Checked of storage mogelijk is in browser
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}

//Wanneer je op enter drukt saved hij de naam die je hebt gegeven
(function() {
  document.querySelector('input').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      // Store
      localStorage.setItem("yourName", "Hello " + document.querySelector('input').value);
      // Retrieve
      document.querySelector(".result").innerHTML = localStorage.getItem("yourName");
    }
  });
})();

