//For autoTyped text
var typed = new Typed(".autoType",{
    strings: ["Student"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


//Script to open and close sidebar  
function openSidebar() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


// Script to toggle light/dark Mode  

const mode = document.getElementById("mode");
const mode2 = document.getElementById("sidebarMode");

function toggleDark(){
    if (mode.innerText==="Dark Mode"){
        mode.innerText="Light Mode";
        mode2.innerText="Light Mode";
        
        document.getElementById("mainImg").src = "img/meLgt2.jpg";
    }
    else{
        mode.innerText="Dark Mode";
        mode2.innerText="Dark Mode";


        document.getElementById("mainImg").src = "img/meDrk2.jpg";
    }

    //Background
    document.body.classList.toggle("lightBody");

    //Navigation
    document.getElementById("navBar").classList.toggle("lightNavBar");
    document.getElementById("navHeader").classList.toggle("lightNavHeader");
        //Nav Btns
    document.getElementById("homeNav").classList.toggle("lightNavBtn");
    document.getElementById("aboutNav").classList.toggle("lightNavBtn");
    document.getElementById("projectNav").classList.toggle("lightNavBtn");
    document.getElementById("connectNav").classList.toggle("lightNavBtn");
    document.getElementById("mode").classList.toggle("lightNavBtn");

    //Home Page
    document.getElementById("home").classList.toggle("lightMain");
    document.getElementById("title").classList.toggle("lightTitle");
    document.getElementById("subTitle").classList.toggle("lightSubTitle");

    //About Page
    document.getElementById("aboutSection").classList.toggle("lightAbout");
    document.getElementById("aboutHeading").classList.toggle("lightHeading");

    //Project Page
    document.getElementById("projectHeading").classList.toggle("lightHeading");

    //Contact Page
    document.getElementById("contactSection").classList.toggle("lightContact");
    document.getElementById("contactHeading").classList.toggle("lightHeading");
};


//  Script for projects reveal animation 
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
