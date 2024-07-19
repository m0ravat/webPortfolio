function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'instant'  // Optional: Smooth scrolling behavior
    });
}
export function switchCSS() {
    document.body.style.color = "aliceblue";
    document.body.classList.add("brown");
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    document.body.classList.add("proj");
    document.body.classList.remove("main");
    document.getElementById("darkmode").style.visibility="hidden";
    document.getElementById("ThemeOptions").style.visibility="hidden";
    document.getElementById("themes").style.visibility="hidden";
}

  

export function loadPass(){
    scrollToTop();
    switchCSS();
    document.getElementById("content").innerHTML=`<div class = "padding"><h1 class="title">Password Generator</h1>
    <div class="container">
        <div class="tags">Python</div>
        <div class="tags">VS Code</div>
        <div class="tags">Randomiser</div>
        <div class="tags">Libraries</div>
    </div>
    <div class="container wrap">
        <div class="firstImg">
            <img src="Media/ProjectsImg/password.png" alt="Image of password" id="pass">
        </div>
        <div class="contents">
            <h2>Table of Contents</h2> <br>
            - <a href="https://github.com/m0ravat/PasswordGen" target="_blank">GitHub</a> <br>
            - <a href="#stack">Stack</a> <br>
            - <a href="#intro">Introduction</a> <br>
            - <a href="#skills">Skills developed</a> <br>
            - <a href="#reflection">Reflection</a> <br>
        </div>
    </div>
    <h1>Stack </h1>
    <div class="container wrap width" id="stack">
        <div class="resource">
            <img src="Media/StackImgg/python-svgrepo-com.svg" alt="">
            <p class="small hidden">Python</p>
        </div>
        <div class="resource">
            <img src="Media/StackImgg/visual-studio-code-svgrepo-com.svg" alt="">
            <p class="small hidden">VS Code</p>
        </div>
        <div class="resource">
            <img src="Media/StackImgg/github-142-svgrepo-com.svg" alt="">
            <p class="small hidden">GitHub</p>
        </div>
    </div>
    <div class="container wrap width" id="intro">
        <h1 class="title">Introduction</h1>
        <p>
            This was a project done to showcase my basic skills in python. I first started by thinking of a basic 
            project and decided to generate multiple passwords and store them in a text file/list. I first used 
            <a href="https://cybernews.com/best-password-managers/how-to-create-a-strong-password/">CyberNews</a> to 
            find out what a strong password was, and decided to make it 12 characters of fully random letters, numbers 
            and characters. This way it doesn't follow any pattern making it impossible to guess.
        </p>
    </div>
    <div class="container wrap width" id="skills">
        <h1 class="title">Skills developed</h1>
        <p>
            Python <br>
            Input Validation - Exception Handling <br>
            Procedural Programming <br>
            Importing of libraries <br>
            Reading/writing to text files
        </p>
    </div>
    <div class="container wrap width" id="reflection">
        <h1 class="title">Reflection</h1>
        <p>
            To conclude, I can say I really enjoyed programming in python. The syntax is really simple and 
            easy to learn, and the use of libraries makes it easy to code certain things. However, it can only be run on 
            a python file so in the future I would like to incorporate it into a user interface. 
        </p>
    </div>
    </div>
    `;
}
export function loadCalc(){
    scrollToTop();
    switchCSS();
    document.getElementById("content").innerHTML=` <div class = "padding">       <h1 class="title gap">Calculator Project</h1>
        <div class="container">
            <div class="tags">Web Programming</div>
            <div class="tags">Arithmetic</div>
            <div class="tags">Input Validation</div>
            <div class="tags">Maths</div>
        </div>
        <div class="container wrap">
            <div class="firstImg">
                <img src="Media/ProjectsImg/calc.png" alt="Image of Calculator UI" id="calc">
            </div>
            <div class="contents">
                <h2>Table of Contents</h2> <br>
                - <a href="https://calculator-murex-omega.vercel.app/" target="_blank">Project Website</a> <br>
                - <a href="https://github.com/m0ravat/Calculator" target="_blank">GitHub</a> <br>
                - <a href="#stack">Stack</a> <br>
                - <a href="#intro">Introduction</a> <br>
                - <a href="#skills">Skills developed</a> <br>
                - <a href="#reflection">Reflection</a> <br>
            </div>
        </div>
        <h1>Stack </h1>
        <div class="container wrap width" id="stack">
            <div class="resource">
                <img src="Media/StackImgg/html5-01-svgrepo-com.svg" alt="" id="vercel">
            </div>
            <div class="resource">
                <img src="Media/StackImgg/css3-01-svgrepo-com.svg" id="vercel" alt="">
            </div>
            <div class="resource">
                <img src="Media/StackImgg/javascript-155-svgrepo-com.svg" id="vercel" alt="">
            </div>
            <div class="resource">
                <img src="Media/StackImgg/visual-studio-code-svgrepo-com.svg" alt="" >
                <p class="small hidden">VS Code</p>
            </div>
            <div class="resource">
                <img src="Media/StackImgg/vercel-svgrepo-com.svg" alt="" id="vercel">
            </div>
            <div class="resource">
                <img src="Media/StackImgg/github-142-svgrepo-com.svg" alt="">
                <p class="small hidden">GitHub</p>
            </div>
        </div>
        <div class="container wrap width" id="intro">
            <h1 class="title">Introduction</h1>
            <p>
                This was my first project in HTML/CSS/JS used to improve my web programming skills, more specifically at designing 
                an effective and responsive user interface. I achieved this by creating an arithmetic calculator that takes in input 
                from buttons and gives an output without the user needing to press an '=' button. The second part, used to determine 
                the outcome of a person's degree based on year 2/3 marks aimed to showcase my input validation skills. 
            </p>
        </div>
        <div class="container wrap width" id="skills">
            <h1 class="title">Skills developed: </h1>
            <p>
                HTML <br>
                CSS <br>
                JavaScript <br> 
                Input Validation <br>
                Designing a simple user interface <br>
                String Manipulation <br>
                Application of basic arithmetic 
            </p>
        </div>
        <div class="container wrap width" id="reflection">
            <h1 class="title">Reflection</h1>
            <p>
                To reflect, I feel this project helped me in my thought process when it comes to designing user interfaces. It's a 
                massive step up from simply programming in a console, and I feel this has given me alot to think about in the future.
            </p>
        </div>
        </div>

    `;
}
export function loadModule(){
    scrollToTop();
    switchCSS();
    document.getElementById("content").innerHTML=`<div class = "padding">    <h1 class="title">Module Enrolment System</h1>
    <div class="container">
        <div class="tags">Java</div>
        <div class="tags">IntelliJ</div>
        <div class="tags">OOP</div>
        <div class="tags">Personal Project</div>
    </div>
    <div class="container wrap">
        <div class="firstImg">
            <img src="Media/ProjectsImg/enrol.png" alt="" id="enrol">
        </div>
        <div class="contents">
            <h2>Table of Contents</h2> <br>
            - <a href="https://github.com/m0ravat/Enrol" target="_blank">GitHub</a> <br>
            - <a href="#stack">Stack</a> <br>
            - <a href="#intro">Introduction</a> <br>
            - <a href="#skills">Skills developed</a> <br>
            - <a href="#reflection">Reflection</a> <br>
        </div>
    </div>
    <h1>Stack </h1>
    <div class="container wrap width" id="stack">
        <div class="resource">
            <img src="Media/StackImgg/intellij-idea-svgrepo-com.svg" alt="">
            <p class="small hidden">IntelliJ</p>
        </div>
        <div class="resource">
            <img src="Media/StackImgg/Javaa.png" alt="">
            <p class="small hidden">Java</p>
        </div>
        <div class="resource">
            <img src="Media/StackImgg/github-142-svgrepo-com.svg" alt="">
            <p class="small hidden">GitHub</p>
        </div>

    </div>
    <div class="container wrap width" id="intro">
        <h1 class="title">Introduction</h1>
        <p>
            This project was done using IntelliJ as my IDE, for the purpose of showcasing my object oriented 
            programming skills. This is a project to allow students to enrol in a module, storing their info in a person class,
            the info of the seat in another and a module class to create multiple instances of modules.
        </p>
    </div>
    <div class="container wrap width" id="skills">
        <h1 class="title">Skills developed</h1>
        <p>
            Creating and altering multiple classes <br>
            Creating multiple instances of a class and storing it in a variable/array <br>
            Object Oriented Programming Fundamentals <br>
            Using the IntelliJ IDE 
        </p>
    </div>
    <div class="container wrap width" id="reflection">
        <h1 class="title">Reflection</h1>
        <p>
            On reflection I can say the IntelliJ IDE is a big improvement on NetBeans, and I found the version control/Git 
            aspect very easy to upload changes on GitHub. I also feel it helped me get used to the syntax of Java and 
            helped me consider multiple aspects of data that need to be stored. 
        </p>
    </div>
    </div>
    `;
}
export function loadPort(){
    scrollToTop();
    switchCSS();
    document.getElementById("content").innerHTML=` <div class = "padding">   <h1 class="title">Personal Portfolio</h1>
    <div class="container">
        <div class="tags">Web Development</div>
        <div class="tags">Web Design</div>
        <div class="tags">Website Deployment</div>
    </div>
    <div class="container wrap">
        <div class="firstImg">
            <img src="Media/ProjectsImg/port.png" alt="Image of Home page" id="port">
        </div>
        <div class="contents">
            <h2>Table of Contents</h2> <br>
            - <a href="https://web-portfolio-orpin-nu.vercel.app/" target="_blank">Project Website</a> <br>
            - <a href="https://github.com/m0ravat/webPortfolio" target="_blank">GitHub</a> <br>
            - <a href="#stack">Stack</a> <br>
            - <a href="#intro">Introduction</a> <br>
            - <a href="#skills">Skills developed</a> <br>
            - <a href="#reflection">Reflection</a> <br>
        </div>
    </div>
    <h1>Stack </h1>
    <div class="container wrap width" id="stack">
        <div class="resource">
            <img src="Media/StackImgg/html5-01-svgrepo-com.svg" alt="" id="vercel">
        </div>
        <div class="resource">
            <img src="Media/StackImgg/css3-01-svgrepo-com.svg" id="vercel" alt="">
        </div>
        <div class="resource">
            <img src="Media/StackImgg/javascript-155-svgrepo-com.svg" id="vercel" alt="">
        </div>
        <div class="resource">
            <img src="Media/StackImgg/visual-studio-code-svgrepo-com.svg" alt="" >
            <p class="small hidden">VS Code</p>
        </div>
        <div class="resource">
            <img src="Media/StackImgg/vercel-svgrepo-com.svg" alt="" id="vercel">
        </div>
        <div class="resource">
            <img src="Media/StackImgg/github-142-svgrepo-com.svg" alt="">
            <p class="small hidden">GitHub</p>
        </div>
    </div>
    <div class="container wrap width" id="intro">
        <h1 class="title">Introduction</h1>
        <p>
            This is a personal website I made upon completion of my first year of university to showcase my skills 
            towards future employers in the hopes of securing a placement year/internship. I realised software engineering 
            is an extremely competitive field, so to stand out I decided I needed to start making projects to showcase my skills, and 
            to do this I would need a personal website. This turned out to be a challenge, but upon making the basic look of each main 
            page I decided to add some functionality through the use of a light/dark mode, hide/show menu options as well as theme/cursor 
            options at the bottom. I ensured the website had a consistent feel, then proceeded to make my projects pages seperate, for 
            the sake of consistency. I also gave it a more simple and effective look. The footer was created at around the same time 
            to act as a sort of sitemap for easy navigation and access. 
        </p>
    </div>
    <div class="container wrap width" id="skills">
        <h1 class="title">Skills developed</h1> <br>
        <p>
            HTML/CSS/JS <br>
            Website Development <br>
            Website Design <br>
            Website Deployment
        </p>
    </div>
    <div class="container wrap width" id="reflection">
        <h1 class="title">Reflection</h1>
        <p>
            Upon reflection as of 24/06/2024, I feel this project has really helped me in terms of my web development skills. 
            I can create websites alot quicker than before, and the styling which was an obstacle has come easy. I have showcased 
            my skills in JavaScript through my calculator project, and hope to showcase it in future projects to come. 
        </p>
    </div>
    </div>

    `;
}