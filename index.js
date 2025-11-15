// Sidebar Opening/Closing

const hamburgerIcon = document.querySelector('.fa-bars');
const xMark = document.querySelector(".upper-part .fa-xmark")
const hamburgerSidebar = document.querySelector(".hamburgerSidebar")
hamburgerIcon.addEventListener("click",()=>{
  hamburgerSidebar.classList.remove("closing")
    hamburgerSidebar.classList.toggle("opening");
})

xMark.addEventListener("click",()=>{
    hamburgerSidebar.classList.remove("opening");
    hamburgerSidebar.classList.toggle("closing");
})

// Navbar Position Fixed

const navbarBox = document.querySelector(".interier-view .navbar-box");
const azzaSvgLink = document.querySelector(".interier-view .navbar-left a");
const languageSelection = document.querySelector(".navbar-box .language-selection span");

window.addEventListener("scroll",()=>{
  if(window.scrollY > 400){
    navbarBox.classList.add("fixed");
    languageSelection.classList.add("scroll")
    hamburgerIcon.style.color = "#4B2613"
    azzaSvgLink.style.display = "block"
  }
  else{
    languageSelection.classList.remove("scroll")
    navbarBox.classList.remove("fixed");
    hamburgerIcon.style.color = "";
    azzaSvgLink.style.display = "none"
  }
})
