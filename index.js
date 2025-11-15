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