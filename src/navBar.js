var buttons = document.querySelectorAll(".topnav-left .button.main");
var navbar = document.getElementById("topnav");
let count = 1;
var footer = document.getElementById("footer");
var darkmode = document.getElementById("darkmode");
let dcount=1;

import { themeDark, themeLight } from "./footer";

export function changeColour(){
    if (dcount % 2 ==1){
        themeDark();
    }
    else{
        themeLight();
    }
}

export function menuclick() {
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

export function darkclick() {
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