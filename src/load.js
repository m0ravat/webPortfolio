export function animateEffect(){
    setTimeout(function(){document.getElementById("topbox").style.visibility="visible";}, 400);
    setTimeout(function(){document.getElementById("topbox").style.left="0";}, 400);
    setTimeout(function(){document.getElementById("topbox").style.position="static";}, 1000);
    
    setTimeout(function(){document.getElementById("topnav").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("topnav").style.left="0";}, 200);
    
    setTimeout(function(){document.getElementById("footer").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("footer").style.left="0";}, 200);
    
    setTimeout(function(){document.getElementById("content").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("content").style.left="0";}, 800);
    
    setTimeout(function(){document.getElementById("projects").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("projects").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("projects").style.position="static";}, 1200);

    setTimeout(function(){document.getElementById("CursorOptions").style.visibility="visible";}, 200);
    setTimeout(function(){document.getElementById("CursorOptions").style.left="0";}, 200);
    
    setTimeout(function(){document.getElementById("bottomInfo").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("bottomInfo").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("bottomInfo").style.position="static";}, 1200);

    setTimeout(function(){document.getElementById("cc").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("cc").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("cc").style.position="static";}, 1200);
    
    setTimeout(function(){document.getElementById("c").style.visibility="visible";}, 800);
    setTimeout(function(){document.getElementById("c").style.left="0";}, 800);
    setTimeout(function(){document.getElementById("c").style.position="static";}, 1200);
}
import { themeDark, themeLight } from "./footer";
function switchCSS() {
    document.body.classList.remove("brown");
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled' || darkMode === null) {
        document.body.classList.remove("light")
        document.body.classList.add("dark");
        themeDark();
        var dcount = 1;
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light")
        themeLight();
        var dcount = 0;
    }
    document.getElementById("darkmode").style.visibility="visible";
    document.getElementById("ThemeOptions").style.visibility="visible";
    document.getElementById("themes").style.visibility="visible";
    document.getElementById("bottomNav").style.visibility="hidden";
}
export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
}
export function loadHome(){
    switchCSS();
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
        <img src="/Media/indexImg/about-me-icon.png" alt="UserIcon" class="boximg" id="img2">
    </div>
    <div class="box" id="projects">
        <div class="text">
            <h1>Projects</h1>
            I have done a variety of projects, ranging from Java to HTML/CSS/JS.
            I have documented these projects on my website, but for those who want to see the code check out my
             <a href="https://github.com/m0ravat" target="blank_">GitHub.</a> Otherwise, for a detailed documentation feel free to click on the
            "Projects" button on the navbar or go to the bottom of the page.
        </div>
        <img src="/Media/indexImg/code.jpg" alt="" class="boximg" id="img3">
    </div>
    `;
}
export function loadAbout() {
    switchCSS();
    document.getElementById("content").innerHTML = `
        <div class="box" id="topbox">
            <p>
                Hi. I am an aspiring backend engineer currently working on my frontend skills. To showcase this I have made a resume purely
                from HTML & CSS (only available on landscape or wide resolution) and a slideshow for you mobile users. 
                Note: The Resume is a very old version which I recreated to improve on my CSS skills, to see my latest one refer to the 
                bottom of the page.
            </p>
        </div>
        <div class="box" id="c">
            <div class="slideshow-container"> 
                <div style="text-align:center">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div>
                <div class="mySlides fade">
                    <div class="board">
                        <h1>My interest in technology</h1>
                        <p>
                            I have been interested in technology since secondary school where I began pseudocode. I proceeded 
                            to code in visual basic during college, and in university Python/Java and HTML/CSS/JS. I aspire to be a backend 
                            programmer as that is where my preference lies, but I am developing my front end skills to Show
                            off my skills to employers like through this portfolio. I am planning on continuing on The Odin Project to learn more
                            about web development and pick up front end technologies like React/TailWind and then move onto the server side. 
                        </p>
                    </div>
                </div>
                <div class="mySlides fade">
                    <div class="board">
                    <h1>Tools I use</h1>
                    <p>
                        Coding Languages : <br>
                        - Python <br>
                        - Java <br>
                        - HTML/CSS/JS <br> <br>
                        Software/Tools : <br>
                        - NetBeans/IntelliJ IDEA (Java) <br>
                        - Python IDE <br>
                        - Visual Studio Code (Python/(HTML/CSS/JS)) <br>
                        - Vercel (web deployment) <br> 
                        - GitHub (Version control) <br> <br>
                        Websites used for design : <br>
                        - Google Icons/fontawesome/SVGRepo (icons) <br>
                        - Google Fonts (Font) <br> <br>
                        Online BootCamps/Resources : <br>
                        - w3schools (basic concepts) <br>
                        - HackerRank (Test my knowledge) <br>
                        - The Odin Project (Current)
                    </p>
                    </div>
                </div>
                <div class="mySlides fade">
                    <div class="board"> 
                        <h1>Main Projects</h1>
                        <p>
                            Python - Random Password Generator <br>
                            Generates a random password of 12 characters featuring the use of uppercase/lowercase letters, numbers and 
                            special characters. <br> <br>
                            Java - Module Enrolment System <br>
                            Allows students to enrol in a module, featuring 5 through the use of object oriented programming. <br> <br>
                            HTML/CSS - Personal Portfolio <br> 
                            Created a portfolio to showcase my skills and increase employability skills.  <br> <br>
                            JavaScript - Calculator Project <br>
                            Two function calculator that does basic arithmetic and finds the degree outcome of a UG university student. 
                            Uses input validation and string manipulation
                        </p>
                    </div>
                </div>
            </div>
            <div class="resume">
                <div class="leftCV">
                    <img src="/Media/AboutMeImg/CVimg.jpeg" alt="" class="imgCV">
                    <div class="bioCV">
                        <span class="material-symbols-outlined padd">person</span>
                        Muhammad Ravat <br> <br>
                        <span class="material-symbols-outlined padd">apartment</span>
                        London, UK <br> <br>
                        <span class="material-symbols-outlined padd">mail</span>
                        moravat763@gmail.com <br> <br>
                        <span class="material-symbols-outlined padd">phone_in_talk</span>
                        07769004379 <br> <br>
                        <span class="material-symbols-outlined padd">language</span>
                        Languages
                        <p class="leftP">• English <br>
                            • Gujarati
                        </p>
                        <span class="material-symbols-outlined padd">grade</span> 
                        Coding Languages
                        <p class="leftP">
                            • Python <br>
                            • Java <br>
                            • HTML/CSS/JS 
                        </p>
                        <span class="material-symbols-outlined padd">laptop_mac</span>
                        Software/Tools used
                        <p class="leftP">
                            • IntelliJ <br>
                            • Python IDE <br>
                            • Visual Studio Code <br>
                            • Vercel <br>
                            • GitHub <br>
                        </p>
                    </div>
                </div>
                <div class="rightCV">
                    <div class="section" style="overflow: hidden; height: auto;"> 
                        <h1>About Me</h1>
                        <p class="black">
                            I am an aspiring software engineer based in East London who wants to become a backend engineer. 
                            I plan to do this by trying to secure an internship and improving my portfolio so I can gain 
                            relevant knowledge and experience. I am currently using the Odin Project to develop my web development
                            skills which I believe are imperative in todays world, where many companies are stuck using primitive websites
                            which reflects poorly on their company. This resume is a mockup which was originally designed 
                            to help me work on my HTML/CSS
                        </p>
                    </div>
                    <div class="section">
                        <h1>Key Skills</h1>
                        <p class="black">
                            ● Communicating within a team - I was part of a student council with 20+ other form representatives and
                            multiple teachers. <br>
                            ● Time management skills - Had to balance 3 university level courseworks and 1 test during Ramadan
                            where I had to fast throughout the whole day. <br>
                            ● Proactive mindset - One duty as a form representative included reaching out to students and asking their
                            opinion. <br>
                            ● Leadership - Was part of a group project where I was key in making sure everyone knew what to do and I
                            had a template set up for everyone. <br>
                        </p>
                    </div>
                    <div class="section"> 
                        <h1>Experience</h1>
                        <p class="black">
                            Form Representative at Langdon Academy (Duration : 1 Academic Year) <br>
                            General description : Part of a student council of 20+ students within the year group and members of faculty, for
                            the purpose of improving the school experience
                        </p>
                    </div>
                    <div class="section"> 
                        <h1>Education History</h1>
                        <p class="black">
                            Langdon Academy | 2016 - 2021 <br> 
                            11 GCSEs Grades 8-4 including English Language (7), Maths (7), Computer Science (8) <br> <br>
        
                            Newham Sixth Form College (Newvic) | 2021 - 2023 <br> 
                            A Levels in Computer Science (D), Economics (C) and Psychology (C) <br> <br>
        
                            University of Westminster | 2023 - Current <br> 
                            Bachelor of Engineering (BEng) Degree in Software Engineering <br>
                            1st year average mark - 72% (1st Class Honours) <br>
                            2nd year average mark - TBA <br>
                            Predicted/Final Degree - TBA/TBA
                        </p>
                    </div> 
                    <div class="section">
                        <h1>Projects</h1>
                        <p class="black">
                            Personal Portfolio (April 2024 - Current) - Created a personal portfolio and uploaded it using vercel to
                            show off my coding skills and improve my web development skills. <br>
                            Module Intake System (June 2024 - June 2024) - Created a 3 class program in Java to allow students to book what 
                            module they would like to join and other features. <br>
                            Calculator App - 2 function calculator designed to do basic arithmetic and calculate the degree of an
                            undergraduate student in HTML/CSS/JS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function loadContact(){
    switchCSS();
    document.getElementById("content").innerHTML=`
    <div class="box" id="topbox">
            <div>
                <h1>Contact Details</h1>
                If you would like to get in touch with me personally you can do so through: <br>
                Phone : +44 (0)7769004379 <br>
                Email : moravat763@gmail.com <br>
                If you would like to leave feedback for the website you can do so below: 
            </div>
        </div>
        <div class="box" id = "c">
            <form action="mailto:moravat763@gmail.com" method="post" enctype="text/plain" id="ff">
                <fieldset class="form one">
                    <legend>Positive Feedback</legend>
                    <label for="name1">Name: </label>
                    <input type="text" id="name1" placeholder="Your name" required minlength="3"> <br> <br>

                    <label for="email1">Email address: </label>
                    <input type="email" id="email1" name="email" placeholder="youremail@email.com"><br> <br>

                    Are you a... <br>

                    <input type="radio" name="delivery" id="am1" value="am">
	                <label for="am1">Student</label> <br>
                    <input type="radio" name="delivery" id="pm1" value="pm">
                    <label for="pm1">Employer</label> <br>
                    <input type="radio" name="delivery" id="eve1" value="eve">
                    <label for="eve1">Other</label> <br> <br>

                    
                    <label for="volume1">Rating for website: </label>
                    <input type="range" id="volume1" name="volume" min="0" max="10" step="1" value="3" style="max-width: 230px;"><br> <br>

                    <label for="speed1">Speed: </label>
                    <input type="range" id="speed1" name="speed" min="0" max="10" step="1" value="3" style="max-width: 230px;"><br> <br>

                    <label for="Quality1">Quality of information available: </label>
                    <input type="range" id="Quality1" name="Quality" min="0" max="10" step="1" value="3" style="max-width: 230px;"><br> <br>
                    
                    <label for="extraP1">Extra Comments:</label>
                    <textarea name="extraP" id="extraP1" cols="40" rows="7"></textarea> <br>
                    <input type="submit" value="Submit" class="buttons">
                    <input type="reset" value="Reset" class="buttons">
                </fieldset>
                <fieldset class="form two">
                    <legend>Improvements</legend>
                    <label for="name">Name: </label>
                    <input type="text" id="name" placeholder="Your name" required minlength="3"> <br> <br>

                    <label for="email">Email address: </label>
                    <input type="email" id="email" name="email" placeholder="youremail@email.com"><br> <br>

                    Are you a... <br>

                    <input type="radio" name="delivery" id="am" value="am">
	                <label for="am">Student</label> <br>
                    <input type="radio" name="delivery" id="pm" value="pm">
                    <label for="pm">Employer</label> <br>
                    <input type="radio" name="delivery" id="eve" value="eve">
                    <label for="eve">Other</label> <br> <br>
                    
                    Tick which pages you think need improvement: <br>
                    <input type="checkbox" name="drink" id="Home" 
                    value="Home" checked>
                    <label for="Home">Home</label> <br>
                    <input type="checkbox" name="drink" id="About_Me" 
                    value="About_Me">
                    <label for="About_Me">About Me</label> <br>
                    <input type="checkbox" name="drink" id="Project" 
                    value="Project">
                    <label for="Project">Project</label> <br>
                    <input type="checkbox" name="drink" id="Contact" value="Contact me">
                    <label for="Contact">Contact me</label> <br> <br>


                    <label for="extraP">Extra Comments:</label>
                    <textarea name="extraP" id="extraP" cols="40" rows="7"></textarea>
                    <input type="submit" value="Submit" class="buttons">
                    <input type="reset" value="Reset" class="buttons">
                </fieldset>
            </form>
        </div>
         `;
}
export function loadProject(){
    switchCSS();
    document.getElementById("content").innerHTML=`
    <div class="box" id="topbox">
            <div class="grid">
                <div class="projectBox">
                    <div class="projectImg">
                        <img src="/Media/ProjectImg/portfolioImg.jpeg" alt="">
                    </div>
                    <div class="projectText">
                        This is for my current website, which I decided to make to show off skills that I have learnt. 
                        This is the longest project I have pursued and it has really challenged my skills. It is my hope to
                        keep building on to this.
                        For more information click <a href="#portProj" class="black">here.</a>
                    </div>
                </div>
                <div class="projectBox">
                    <div class="projectImg">
                        <img src="/Media/ProjectImg/javaImg.jpeg" alt="">
                    </div>
                    <div class="projectText">
                        This is a project where a user can enrol in multiple modules and choose what class they want to be in. This was 
                        inspired but not copying my original java coursework which was a plane booking system. More information can
                        be found <a href="#moduleProj" class="black">here.</a>
                    </div>
                </div>
                <div class="projectBox">
                    <div class="projectImg">
                        <img src="/Media/ProjectImg/webImg.jpeg" alt="">
                    </div>
                    <div class="projectText">
                        This is for my first main project in HTML/CSS/JS which is designing a two function calculator, the first 
                        being a responsive arithmetic calculator and another find the outcome of a university student. For more
                        information click <a href="#calculatorProj" class="black">here.</a>
                    </div>
                </div>
                <div class="projectBox">
                    <div class="projectImg">
                        <img src="/Media/ProjectImg/pythonImg.jpeg" alt="">
                    </div>
                    <div class="projectText">
                        This is a project done in python for a password generator. It generates a 12 character password, randomly choosing 
                        from a selection of characters, numbers and letters. It combines various basic
                        concepts to demonstrate my skills cultivated in university. For more information
                        please click <a href="#passProj" class="black">here.</a>
                    </div>
                </div>
            </div>
        </div>
        `;
}

