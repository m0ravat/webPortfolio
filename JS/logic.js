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
var cursor = document.getElementById("cursors");

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
            document.body.style.backgroundImage="url('/Media/darkbg.jpg')";
            document.body.style.color="#34eba8";
            darkmode.style.backgroundColor="#34eba8";
            menu.style.backgroundColor="#34eba8";
        }
        document.getElementById("active").style.backgroundColor="white";
    }else{
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor="white";
            document.body.style.backgroundImage="url('/Media/whitebg.png')";
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
    setTimeout(function(){document.getElementById("forms").style.visibility="visible";}, 700);
    setTimeout(function(){document.getElementById("forms").style.left="0";}, 700);
}
function cursorChange(){
    let index = document.getElementById("cursors").selectedIndex;
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

