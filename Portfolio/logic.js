var menu = document.getElementById("menubutton");
var navbar = document.getElementById("navbar");
var buttons = document.querySelectorAll(".topnav-left .button");
let count = 1;
let dcount = 1;
var footer = document.getElementById("footer");
var darkmode = document.getElementById("darkmode");
var icon = document.querySelectorAll("icon-text");
var user = document.getElementById("userpImg");
var active = document.getElementById("active");
var topbox = document.getElementById("topbox");

function menuclick() {
    if (count % 2 == 1) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.opacity = "0";
            footer.style.opacity="0";
            darkmode.style.opacity="0";
        }
    }else{
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.opacity = "1";
            footer.style.opacity="1";
            darkmode.style.opacity="1";
        }
    }
    count++;
}

function darkclick(){
    if (dcount % 2 == 1){
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor="#34eba8";
            document.body.style.backgroundImage="url('darkbg.jpg')";
            document.body.style.color="#34eba8";
            document.body.style.cursor="url('cursor.png')"
            darkmode.style.backgroundColor="#34eba8";
            menu.style.backgroundColor="#34eba8";
        }
        document.getElementById("active").style.backgroundColor="white";
    }else{
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor="white";
            document.body.style.backgroundImage="url('whitebg.png')";
            document.body.style.color="black";
            darkmode.style.backgroundColor="white";
            menu.style.backgroundColor="white";
        }
        document.getElementById("active").style.backgroundColor="#4bc497";
    }
    dcount++;
}
function load(){
    setTimeout(function(){document.getElementById("topbox").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("topbox").style.left="0";}, 200);
    setTimeout(function(){document.getElementById("navbar").style.visibility="visible";}, 100);
    setTimeout(function(){document.getElementById("footer").style.visibility="visible";}, 100);
    setTimeout(function(){document.getElementById("aboutme").style.visibility="visible";}, 700);
    setTimeout(function(){document.getElementById("aboutme").style.left="0";}, 700);
    setTimeout(function(){document.getElementById("projects").style.visibility="visible";}, 1000);
    setTimeout(function(){document.getElementById("projects").style.left="0";}, 1000);
    setTimeout(function(){document.getElementById("resume").style.visibility="visible";}, 700);
    setTimeout(function(){document.getElementById("resume").style.left="0";}, 700);
}

