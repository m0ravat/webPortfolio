var menu = document.getElementById("menubutton");
var navbar = document.getElementById("topnav");
var buttons = document.querySelectorAll(".topnav-left .button");
let count = 1;
let dcount = 1;
var footer = document.getElementById("footer");
var darkmode = document.getElementById("darkmode");
var cursors = document.getElementById("CursorOptions");
var themes = document.getElementById("ThemeOptions");
let index = document.getElementById("cursors");
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
window.slideIndex = 1;

window.currentSlide = function(n) {
    showSlides(window.slideIndex = n);
};

// Ensure these functions are globally accessible
window.slideIndex = 1;

window.currentSlide = function(n) {
    showSlides(window.slideIndex = n);
};

window.showSlides = function(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {window.slideIndex = 1}
    if (n < 1) {window.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[window.slideIndex-1].style.display = "block";
    dots[window.slideIndex-1].className += " active";
};

import { loadHome, loadAbout, loadProject, loadContact } from "./load.js";
function setCurrentTab(tab) {
    localStorage.setItem('currentTab', tab);
}

document.getElementById("navHome").addEventListener('click', function() {
    loadHome();
    animateEffect();
    setCurrentTab('home');
});

document.getElementById("navAbout").addEventListener('click', function() {
    loadAbout();
    setTimeout(animateEffect);
    window.showSlides(1);  // Ensure first slide is shown after loadAbout
    setCurrentTab('about');
});

document.getElementById("navProject").addEventListener('click', function() {
    loadProject();
    animateEffect();
    setCurrentTab('project');
});

document.getElementById("navContact").addEventListener('click', function() {
    loadContact();
    animateEffect();
    setCurrentTab('contact');
});

// Load the saved tab when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const currentTab = localStorage.getItem('currentTab') || 'home'; // default to 'home'
    switch (currentTab) {
        case 'about':
            loadAbout();
            setTimeout(animateEffect);
            window.showSlides(1);
            break;
        case 'project':
            loadProject();
            animateEffect();
            break;
        case 'contact':
            loadContact();
            animateEffect();
            break;
        case 'home':
        default:
            loadHome();
            animateEffect();
            break;
    }
});

menu.addEventListener('click',menuclick);
darkmode.addEventListener('click',darkclick)
function menuclick() {
    if (count % 2 == 1) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility="hidden";
            footer.style.visibility="hidden";
            darkmode.style.visibility="hidden";
            cursors.style.visibility="hidden";
            themes.style.visibility="hidden";
        }
        navbar.style.opacity="0.5";
    }else{
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility="visible";
            footer.style.visibility="visible";
            darkmode.style.visibility="visible";;
            cursors.style.visibility="visible";
            themes.style.visibility="visible";
        }
        navbar.style.opacity="1";
    }
    count++;
}

function darkclick() {
    dcount++;
    if (dcount % 2 == 1) {
        document.body.style.backgroundImage = "url('/src/Media/Backgrounds/dark.svg')";
        themeDark();
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.style.backgroundImage = "url('/src/Media/Backgrounds/light.svg')";
        themeLight();
        localStorage.setItem('darkMode', 'disabled');
    }
}
// Load the saved values when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSelection('cursors');
    cursorChange();

    loadSelection('themes');
    animateEffect();

    // Load dark/light mode state
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled' || darkMode === null) {
        document.body.style.backgroundImage = "url('/src/Media/Backgrounds/dark.svg')";
        themeDark();
        dcount = 1;  // Ensure dcount starts at an odd number
    } else {
        document.body.style.backgroundImage = "url('/src/Media/Backgrounds/light.svg')";
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

    setTimeout(function(){document.getElementById("CursorOptions").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("CursorOptions").style.left="0";}, 200);
    setTimeout(function(){document.getElementById("bottomInfo").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("bottomInfo").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("topbox").style.position="static";}, 1000);
    
    setTimeout(function(){document.getElementById("projects").style.position="static";}, 1200);
    setTimeout(function(){document.getElementById("bottomInfo").style.position="static";}, 1200);
    
    setTimeout(function(){document.getElementById("cc").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("cc").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("cc").style.position="static";}, 1200);
    
    setTimeout(function(){document.getElementById("c").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("c").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("c").style.position="static";}, 1200);
}
cursors.addEventListener('change', function() {
    saveSelection('cursors');
});
document.getElementById("cursors").addEventListener("change",cursorChange);
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

themes.addEventListener('change', function() {
    saveSelection('themes');
});
document.getElementById("themes").addEventListener("change",changeColour);


function changeColour(){
    if (dcount % 2 ==1){
        themeDark();
    }
    else{
        themeLight();
    }
}

function themeLight(){
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

document.getElementById("pass").addEventListener('click',function(){
    loadProjectsPage();
    loadPass();
});
document.getElementById("").addEventListener('click',loadCalc);
document.getElementById("").addEventListener('click',loadModule);
document.getElementById("").addEventListener('click',loadPort);

