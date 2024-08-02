var menu = document.getElementById("menubutton");
var navbar = document.getElementById("topnav");
var buttons = document.querySelectorAll(".topnav-left .button");
let count = 1;
let dcount = 1;
var footer = document.getElementById("footer");
var darkmode = document.getElementById("darkmode");
var icon = document.querySelectorAll("icon-text");
var user = document.getElementById("userpImg");
var active = document.getElementById("active");
var topbox = document.getElementById("topbox");
var cursor = document.getElementById("cursors");
var title = document.getElementById("navTitle");
var cursors = document.getElementById("CursorOptions");
var themes = document.getElementById("ThemeOptions");
var theme = document.getElementById("themes");
let index = document.getElementById("cursors");
let index1 = document.getElementById("cursors").selectedIndex;
let theme1=document.getElementById("themes").selectedIndex;
// Save the selected value to local storage
function saveSelection(id) {
    var select = document.getElementById(id);
    localStorage.setItem(id, select.value);
}
        
// Retrieve the selected value from local storage
function loadSelection(id) {
    var select = document.getElementById(id);
    var savedValue = localStorage.getItem(id);
    if (savedValue) {
        select.value = savedValue;
    }
}
        
// Load the saved values when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSelection('cursors');
    loadSelection('themes');
});

function menuclick() {
    if (count % 2 == 1) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility="hidden";
            footer.style.visibility="hidden";
            darkmode.style.visibility="hidden";
            cursors.style.visibility="hidden";
            themes.style.visibility="hidden";
            document.getElementById("navTitle").style.visibility="hidden";
        }
        navbar.style.opacity="0.5";
    }else{
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility="visible";
            footer.style.visibility="visible";
            darkmode.style.visibility="visible";;
            cursors.style.visibility="visible";
            themes.style.visibility="visible";
            document.getElementById("navTitle").style.visibility="visible";
        }
        navbar.style.opacity="1";
    }
    count++;
}

function darkclick() {
    dcount++;
    if (dcount % 2 == 1) {
        document.body.style.backgroundImage = "url('/Media/Backgrounds/polygon-scatter-haikei (1).svg')";
        themeDark();
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.style.backgroundImage = "url('/Media/Backgrounds/polygon-scatter-haikei (2).svg')";
        themeLight();
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Load the saved values when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSelection('cursors');
    loadSelection('themes');

    // Load dark/light mode state
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled' || darkMode === null) {
        document.body.style.backgroundImage = "url('/Media/Backgrounds/polygon-scatter-haikei (1).svg')";
        themeDark();
        dcount = 1;  // Ensure dcount starts at an odd number
    } else {
        document.body.style.backgroundImage = "url('/Media/Backgrounds/polygon-scatter-haikei (2).svg')";
        themeLight();
        dcount = 0;  // Ensure dcount starts at an even number
    }
});
function animateEffect(){
    setTimeout(function(){document.getElementById("topbox").style.visibility="visible";}, 400);
    setTimeout(function(){document.getElementById("topbox").style.left="0";}, 400);
    setTimeout(function(){document.getElementById("topnav").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("topnav").style.left="0";}, 200);
    setTimeout(function(){document.getElementById("footer").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("footer").style.left="0";}, 200);
    setTimeout(function(){document.getElementById("content").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("content").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("projects").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("projects").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("content").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("content").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("CursorOptions").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("CursorOptions").style.left="0";}, 200);
    setTimeout(function(){document.getElementById("bottomInfo").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("bottomInfo").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("topbox").style.position="static";}, 1000);
    setTimeout(function(){document.getElementById("content").style.position="static";}, 1200);
    setTimeout(function(){document.getElementById("projects").style.position="static";}, 1200);
    setTimeout(function(){document.getElementById("bottomInfo").style.position="static";}, 1200);
}
function load(){
    animateEffect();
}

document.getElementById("cursors").addEventListener("change",cursorChange);
document.getElementById("themes").addEventListener("change",changeColour);
function cursorChange(){
    index = document.getElementById("cursors").selectedIndex;
    switch(index){
        case 0:
            document.body.style.cursor="auto";
            break;
        case 1:
            document.body.style.cursor= "url('https://sweezy-cursors.com/wp-content/uploads/cursor/star-wars-obi-wan-kenobi-lightsaber-animated/star-wars-obi-wan-kenobi-lightsaber-animated-pointer-32x32.png'),auto";
            break;
        case 2:
            document.body.style.cursor="url('https://sweezy-cursors.com/wp-content/uploads/cursor/star-wars-darth-vader-lightsaber/star-wars-darth-vader-lightsaber-cursor-32x32.png'),auto";
            break;
        case 3:
            document.body.style.cursor="url('https://sweezy-cursors.com/wp-content/uploads/cursor/kaiju-no-8-kafka-hibino-animated/kaiju-no-8-kafka-hibino-animated-cursor-3-32x32.png'),auto";
            break;
        case 4:
            document.body.style.cursor="url('https://sweezy-cursors.com/wp-content/uploads/cursor/black-rainbow-stroke-gradient-animated/black-rainbow-stroke-gradient-animated-cursor-8-32x32.png'),auto";
            break;
        case 5:
            document.body.style.cursor="url('https://sweezy-cursors.com/wp-content/uploads/cursor/one-piece-monkey-d-luffy-gear-4-animated/one-piece-monkey-d-luffy-gear-4-animated-cursor-2-32x32.png'),auto";
            break;
        case 6:
            document.body.style.cursor="url('https://sweezy-cursors.com/wp-content/uploads/cursor/lamborghini-veneno/lamborghini-veneno-cursor-32x32.png'),auto";
            break;
        case 7:
            document.body.style.cursor="url('https://sweezy-cursors.com/wp-content/uploads/cursor/red-laferrari/red-laferrari-cursor-32x32.png'),auto";
            break;
        case 8:
            document.body.style.cursor="url('https://sweezy-cursors.com/wp-content/uploads/cursor/auto-draft/purple-toyota-gr-supra-cursor-32x32.png'),auto";
            break;
        case 9:
            document.body.style.cursor="url('https://sweezy-cursors.com/wp-content/uploads/cursor/among-us-john-wick-skin/among-us-john-wick-skin-cursor-32x32.png'),auto";
            break;
    }
}
function changeColour(){
    if (dcount % 2 ==1){
        themeDark();
    }
    else{
        themeLight();
    }
}

function themeLight(){
    document.getElementById("navTitle").style.color="white";
    let optionval = document.getElementById("themes").selectedIndex;
    switch(optionval){
        case 0:
            document.body.style.color="blue";
            navbar.style.backgroundColor="blue";
            break;
        case 1:
            document.body.style.color="black";
            navbar.style.backgroundColor="black";
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.color="white";
                darkmode.style.color="white";
                menu.style.color="white";
            }
            break;
        case 2:
            document.body.style.color="rgb(0, 128, 85)";
            navbar.style.backgroundColor="rgb(0, 128, 85)";
            break;
        case 3:
            document.body.style.color="#d42b25";
            navbar.style.backgroundColor="#d42b25";
            break;                
        case 4:
            document.body.style.color="#ff5e00";
            navbar.style.backgroundColor="#ff5e00";
            break;                
        case 5:
            document.body.style.color="#a735ff";
            navbar.style.backgroundColor="#a735ff";
            break;
        case 6:
            document.body.style.color="rgb(255, 0, 85)";
            navbar.style.backgroundColor="rgb(255, 0, 85)";
            break;
    }
}


function themeDark(){
    document.getElementById("navTitle").style.color="black";

    let optionval = document.getElementById("themes").selectedIndex;
    switch(optionval){
        case 0:
            document.body.style.color="#2fdcec";
            navbar.style.backgroundColor="#2fdcec";
            break;
        case 1:
            document.body.style.color="white";
            navbar.style.backgroundColor="white";
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.color="black";
                darkmode.style.color="black";
                menu.style.color="black";
            }
            break;
        case 2:
            document.body.style.color="#34eba8";
            navbar.style.backgroundColor="#34eba8";
            break;
        case 3:
            document.body.style.color="#e53529";
            navbar.style.backgroundColor="#e53529";
            break;                
        case 4:
            document.body.style.color="#ff5e00";
            navbar.style.backgroundColor="#ff5e00";
            break;                
        case 5:
            document.body.style.color="#a735ff";
            navbar.style.backgroundColor="#a735ff";
            break;
        case 6:
            document.body.style.color="#ff3597";
            navbar.style.backgroundColor="#ff3597";
            break;
    }
}
let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


