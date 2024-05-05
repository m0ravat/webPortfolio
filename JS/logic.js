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
var title = document.getElementById("navTitle")

function menuclick() {
    if (count % 2 == 1) {
        for (var i = 0; i < 4; i++) {
            buttons[i].style.opacity = "0";
            footer.style.opacity="0";
            darkmode.style.opacity="0";
        }
        navbar.style.opacity="0.5";
    }else{
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.opacity = "1";
            footer.style.opacity="1";
            darkmode.style.opacity="1";
        }
        navbar.style.opacity="1";
    }
    count++;
}

function darkclick(){
    if (dcount % 2 == 1){
        for (var i = 0; i < buttons.length; i++) {
            document.body.style.backgroundImage="url('/Media/darkbg.jpg')";
            document.body.style.color="#34eba8";
        }
    }else{
        for (var i = 0; i < buttons.length; i++) {
            document.body.style.backgroundImage="url('/Media/whitebg.png')";
            document.body.style.color="black";
        }
        document.getElementById("active").style.backgroundColor="#4bc497";
    }
    dcount++;
}
function load(){
    setTimeout(function(){document.getElementById("topbox").style.visibility="visible";}, 400);
    setTimeout(function(){document.getElementById("topbox").style.left="0";}, 400);
    setTimeout(function(){document.getElementById("navbar").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("navbar").style.left="0";}, 200);
    setTimeout(function(){document.getElementById("footer").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("footer").style.left="0";}, 200);
    setTimeout(function(){document.getElementById("content").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("content").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("projects").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("projects").style.left="0";}, 800);


    setTimeout(function(){document.getElementById("topbox").style.position="static";}, 1000);
    setTimeout(function(){document.getElementById("content").style.position="static";}, 1200);
    setTimeout(function(){document.getElementById("projects").style.position="static";}, 1200);


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


