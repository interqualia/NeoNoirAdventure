//Variables
var inventory = [];
var inputContainer = document.querySelector('.input-field')
var inputField = inputContainer.querySelector('input')
var nameField = document.querySelector(".result");
var allAppear = document.querySelectorAll('.appear, .appear-2, .appear-3')
var dayofWeek = document.querySelector(".dayoftheweek");
var timeofday = document.querySelector(".timeoftheday");
var messageofday = document.querySelector(".messageofday");

//Dit zorgt ervoor dat het de huidige dag pakt Bron: http://www.w3schools.com/jsref/jsref_getday.asp
function introMessage() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";

    var n = weekday[d.getDay()];
    dayofWeek.innerHTML = n;

    //Dit zorgt ervoor dat het bericht verandert aan de hand van de tijd Bron: http://www.javascriptsource.com/time-date/good-morning-afternoon-and-evening-by-brad-jones-120319202500.html;
    if ( d.getHours() < 12 )
    {
        timeofday.innerHTML = ("morning");
        messageofday.innerHTML = ("the rays of the sun hit your face. It's a new day, a new crime to solve.");
    }
    else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
    if ( d.getHours() >= 12 && d.getHours() <= 17 )
    {
        timeofday.innerHTML = ("afternoon");
        messageofday.innerHTML = ("the sky is colored red with hues of blue. It's a beautiful afternoon, but crime doesn't stop. It never does.");
    }
    else  /* the hour is after 5pm, so it is between 6pm and midnight */
    if ( d.getHours() > 17 && d.getHours() <= 24 )
    {
        timeofday.innerHTML = ("evening");
        messageofday.innerHTML = ("the reflection of the moon hits your face. It's night, but that doesn't stop a detective like you.");
    }
}

introMessage();

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

//Laat teksten verschijnen
function makeAppear(){
    var arrayLength = allAppear.length;
    for (var i = 0; i < arrayLength; i++) {
        allAppear[i].classList.add("opacityAnimation");
    }
}

makeAppear();