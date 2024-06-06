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
            buttons[i].style.visibility="visible";;
            footer.style.visibility="visible";;
            darkmode.style.visibility="visible";;
            cursors.style.visibility="visible";
            themes.style.visibility="visible";
        }
        navbar.style.opacity="1";
    }
    count++;
}

function darkclick(){
    if (dcount % 2 == 0){
        document.body.style.backgroundImage="url('/Media/whitebg.png')";
        themeLight();
    }else{
        document.body.style.backgroundImage="url('/Media/darkbg.jpg')";
        themeDark();
    }
    dcount++;
}
function load(){
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


    setTimeout(function(){document.getElementById("topbox").style.position="static";}, 1000);
    setTimeout(function(){document.getElementById("content").style.position="static";}, 1200);
    setTimeout(function(){document.getElementById("projects").style.position="static";}, 1200);

    if(dcount%2 ==0){
        document.body.style.backgroundImage="url('/Media/whitebg.png')";
        themeLight();
    }
    else{
        document.body.style.backgroundImage="url('/Media/darkbg.jpg')";
        themeDark();
    }


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
            document.body.style.color="#2fdcec";
            navbar.style.backgroundColor="#2fdcec";
            break;
        case 1:
            document.body.style.color="black";
            navbar.style.backgroundColor="black";
            break;
        case 2:
            document.body.style.color="#34eba4";
            navbar.style.backgroundColor="#34eba8";
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
            document.body.style.color="#ff3597";
            navbar.style.backgroundColor="#ff3597";
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


