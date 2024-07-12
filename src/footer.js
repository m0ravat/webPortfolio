let index = document.getElementById("cursors");
var darkmode = document.getElementById("darkmode");
var buttons = document.querySelectorAll(".topnav-left .button");
var navbar = document.getElementById("topnav");
export function cursorChange(){
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

export function themeLight(){
    let optionval = document.getElementById("themes").selectedIndex;
    switch(optionval){
        case 0:
            document.body.style.color="blue";
            document.getElementById("topnav").style.backgroundColor="blue";
            break;
        case 1:
            document.body.style.color="black";
            document.getElementById("topnav").style.backgroundColor="black";
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.color="white";
                darkmode.style.color="white";
                menu.style.color="white";
            }
            break;
        case 2:
            document.body.style.color="rgb(0, 128, 85)";
            document.getElementById("topnav").style.backgroundColor="rgb(0, 128, 85)";
            break;
        case 3:
            document.body.style.color="#d42b25";
            document.getElementById("topnav").style.backgroundColor="#d42b25";
            break;                
        case 4:
            document.body.style.color="#ff5e00";
            document.getElementById("topnav").style.backgroundColor="#ff5e00";
            break;                
        case 5:
            document.body.style.color="#a735ff";
            document.getElementById("topnav").style.backgroundColor="#a735ff";
            break;
        case 6:
            document.body.style.color="rgb(255, 0, 85)";
            document.getElementById("topnav").style.backgroundColor="rgb(255, 0, 85)";
            break;
    }
}

export function themeDark(){
    let optionval = document.getElementById("themes").selectedIndex;
    switch(optionval){
        case 0:
            document.body.style.color="#2fdcec";
            document.getElementById("topnav").style.backgroundColor="#2fdcec";
            break;
        case 1:
            document.body.style.color="white";
            document.getElementById("topnav").style.backgroundColor="white";
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.color="black";
                darkmode.style.color="black";
                menu.style.color="black";
            }
            break;
        case 2:
            document.body.style.color="#34eba8";
            document.getElementById("topnav").style.backgroundColor="#34eba8";
            break;
        case 3:
            document.body.style.color="#e53529";
            document.getElementById("topnav").style.backgroundColor="#e53529";
            break;                
        case 4:
            document.body.style.color="#ff5e00";
            document.getElementById("topnav").style.backgroundColor="#ff5e00";
            break;                
        case 5:
            document.body.style.color="#a735ff";
            document.getElementById("topnav").style.backgroundColor="#a735ff";
            break;
        case 6:
            document.body.style.color="#ff3597";
            document.getElementById("topnav").style.backgroundColor="#ff3597";
            break;
    }
}
