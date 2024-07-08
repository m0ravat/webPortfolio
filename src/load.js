export function loadHome(){
    document.getElementById("content").innerHTML=`
    <div class="box" id="topbox">
        <div class="text">
            <h1>Welcome! my name is Muhammad Ravat</h1>
            This is my website designed to showcase my skills. You can use the navigation bar or use the footer below which 
            has every link you would need, along with my contact info. If you encounter any issues please let me know!
        </div>
        <img src="/Media/indexImg/project.jpg" alt="" class="boximg" id="img1">
    </div>
    <div class="box" id="cc">
        <div class="text">
            <h1>Brief Overview</h1>
            I am a university student who is studying software engineering who is aiming to be a fullstack engineer 
            specialising in backend development. If you would like to 
            see my CV or learn more about me, click the "About Me" button on the navbar or go to the bottom.
        </div>
        <img src="../Media/indexImg/about-me-icon.png" alt="UserIcon" class="boximg" id="img2">
    </div>
    <div class="box" id="projects">
        <div class="text">
            <h1>Projects</h1>
            I have done a variety of projects, ranging from Java to HTML/CSS/JS.
            I have documented these projects on my website, but for those who want to see the code check out my
             <a href="https://github.com/m0ravat" target="blank_">GitHub.</a> Otherwise, for a detailed documentation feel free to click on the
            "Projects" button on the navbar or go to the bottom of the page.
        </div>
        <img src="../Media/indexImg/code.jpg" alt="" class="boximg" id="img3">
    </div>
    `;
}
function loadAbout(){
    
}
