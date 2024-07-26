import './styles.css';


var menu = document.getElementById("menubutton");
var darkmode = document.getElementById("darkmode");
var cursors = document.getElementById("CursorOptions");
var themes = document.getElementById("ThemeOptions");

import {animateEffect, scrollToTop} from "./load.js";
import { loadHome, loadAbout, loadProject, loadContact } from "./load.js";
import { menuclick, darkclick, changeColour } from "./navbar.js";
import { cursorChange, themeDark, themeLight } from "./footer.js";
import { loadCalc, loadModule, loadPass, loadPort } from "./loadProjects.js";



document.getElementById('portProj').addEventListener('click', loadPort);
document.getElementById('calculatorProj').addEventListener('click', loadCalc);
document.getElementById('moduleProj').addEventListener('click', loadModule);
document.getElementById('passProj').addEventListener('click', loadPass);

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

menu.addEventListener('click',menuclick);
darkmode.addEventListener('click',darkclick)

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



function setCurrentTab(tab) {
    localStorage.setItem('currentTab', tab);
}

function handleHomeClick() {
    scrollToTop();
    loadHome();
    animateEffect();
    setCurrentTab('home');
}

function handleAboutClick() {
    scrollToTop();
    loadAbout();
    setTimeout(animateEffect);
    showSlides(1);  // Ensure the first slide is shown after loadAbout
    setCurrentTab('about');
}

function handleProjectClick() {
    scrollToTop();
    loadProject();
    animateEffect();
    setCurrentTab('project');
}

function handleContactClick() {
    scrollToTop();
    loadContact();
    animateEffect();
    setCurrentTab('contact');
}

// Attach event listeners to buttons
document.getElementById("navHome").addEventListener('click', handleHomeClick);
document.getElementById("navAbout").addEventListener('click', handleAboutClick);
document.getElementById("navProject").addEventListener('click', handleProjectClick);
document.getElementById("navContact").addEventListener('click', handleContactClick);

// Attach event listeners to spans
document.getElementById("mainHome").addEventListener('click', handleHomeClick);
document.getElementById("mainAbout").addEventListener('click', handleAboutClick);
document.getElementById("mainProject").addEventListener('click', handleProjectClick);
document.getElementById("mainContact").addEventListener('click', handleContactClick);
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




// Load the saved values when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadSelection('cursors');
    cursorChange();

    loadSelection('themes');
    animateEffect();

    // Load dark/light mode state
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled' || darkMode === null) {
        document.body.classList.remove("light")
        document.body.classList.add("dark");
        themeDark();
        var dcount = 1;  // Ensure dcount starts at an odd number
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light")
        themeLight();
        var dcount = 0;  // Ensure dcount starts at an even number
    }
});


cursors.addEventListener('change', function() {
    saveSelection('cursors');
});
document.getElementById("cursors").addEventListener("change",cursorChange);


themes.addEventListener('change', function() {
    saveSelection('themes');
});
document.getElementById("themes").addEventListener("change",changeColour);






