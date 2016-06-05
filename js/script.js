//Hulp gekregen met performance/best practices van Rick Lancee github.com/ricklancee

//Variables
var inventory = [];
var story = [];
var i;

var storyContainer = document.querySelector('.story');
var buttonBox = document.querySelector('.buttonBox');

var inputContainer = document.querySelector('.input-field');
var inputField = inputContainer.querySelector('input');

var nameField = document.querySelector(".result");
var allAppear = document.querySelectorAll('.appear, .appear-2, .appear-3, .clock');

var dayofWeek = document.querySelector('.dayoftheweek');
var timeofday = document.querySelector('.timeoftheday');
var messageofday = document.querySelector('.messageofday');
var timeClock = document.querySelector('.clock');

var inventoryOpenClose = document.querySelector('.inventory');
var inventoryCard = inventoryOpenClose.querySelector('.inventory-text');

var items = {
    keys: {
        name: "Car keys:",
        description: "Your car keys, they have the logo of your car imprinted on them."
    },
    infoAboutJohnny: {
        name: "Johnny Zerkon:",
        description: "a junior detective at your department, you're not sure if he's fit for the job. But he sure has vigor."
    }
};

function createInventory(){
    var count = inventory.length;
    for (var i = 0; i < count; i++) {
        inventoryCard.innerHTML += inventory[i].name + " " + inventory[i].description + '<br> <br>';
    }
};

//voegt een klok toe Bron: http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    timeClock.innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
};
function checkTime(i){
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};

//Laat teksten verschijnen
function makeAppear(){
    var arrayLength = allAppear.length;
    for (var i = 0; i < arrayLength; i++) {
        allAppear[i].classList.add("opacityAnimation");
    }
};

//Dit creëert de scenario's inspiratie http://fremontcoderdojo.com/2015/01/08/html-text-adventure-game/
var storyScenario = {
    one: {
        text: "Hmm.. it’s " + new Date().getHours()+":"+new Date().getMinutes() + " I should get to working. Where should I go first?<br> <i class=small-text> Press 1 for the station and press 2 for the café</i>"
        //buttons: [["Go to the station"], ["story.push(storyScenario.two)"],["test"], ["story.push(storyScenario.two)"]]
    }
};

function createStory(){
    var count = story.length;
    for (var i = 0; i < count; i++) {
        storyContainer.innerHTML += story[i].text + '<br>';
        //buttonBox.innerHTML += "<button class= btn-large>" + story[i].buttons[0] + "</button>";
    }
};

//Wanneer je op enter drukt saved hij de naam die je hebt gegeven
inputField.addEventListener('keydown', function(saveName) {
    if (saveName.keyCode === 13) {
      var welcomeText = "Ah, that's right. My name is " + inputField.value + " how could I forget that?";
      // Store
      localStorage.setItem("yourName", welcomeText);
      // Retrieve
      nameField.innerHTML = welcomeText;

      inputContainer.classList.add("invisible");

      story.push(storyScenario.one);  //add scenario
      createStory();
    }
});

//Wanneer je op i drukt opent de inventory
window.addEventListener('keydown', function(openInventory) {
    if (openInventory.keyCode ===  73) {
     inventoryOpenClose.classList.toggle('show');
    }
});

//Het verhaal
window.addEventListener('keydown', function(storyChoice) {
    if (storyChoice.keyCode === 49) {
     storyContainer.innerHTML += 'You grab your keys and walk towards your car. Once you reach your car you notice there is still mail you didn’t read.<br><br>';
     console.log('this works');
     inventory.push(items.keys);
     createInventory();
    }
    if (storyChoice.keyCode === 50) {
     storyContainer.innerHTML += 'You go to your favorite coffee shop around the corner and order some good black coffee. In the corner of your eye you can see Johnny (a junior detective at the station) walking towards you. He looks young.. You notice the scars on his left eyebrow and upperlip. His eyes give a certain glow, he looks at you with respect.<br><br>';
     console.log('this works too');
     inventory.push(items.infoAboutJohnny);
     createInventory();
    }
});

//Dit zorgt ervoor dat het de huidige dag & tijd pakt Bron: http://www.w3schools.com/jsref/jsref_getday.asp
function introMessage() {
    var d = new Date();
    var weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    var n = weekday[d.getDay()];
    dayofWeek.innerHTML = n;

    //Dit zorgt ervoor dat het bericht verandert aan de hand van de tijd Bron: http://www.javascriptsource.com/time-date/good-morning-afternoon-and-evening-by-brad-jones-120319202500.html;
    if ( d.getHours() < 12 )
    {
        timeofday.innerHTML = "morning";
        messageofday.innerHTML = "the rays of the sun hit my face. It's a new day, a new crime to solve. But first, what was my name again?";
    }
    else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
    if ( d.getHours() >= 12 && d.getHours() <= 17 )
    {
        timeofday.innerHTML = "afternoon";
        messageofday.innerHTML = "the sky is colored blue with hues of red. It's beautiful... But crime doesn't stop. It never does so I won't either. But first, what was my name again?";
    }
    else  /* the hour is after 5pm, so it is between 6pm and midnight */
    if ( d.getHours() > 17 && d.getHours() <= 24 )
    {
        timeofday.innerHTML = "evening";
        messageofday.innerHTML = "the reflection of the moon hits my face. It's night, crime doesn't sleep and so won't I. But first, what was my name again?";
    }
}

function initialize() {
    introMessage();
    startTime();
    makeAppear();
}

initialize();