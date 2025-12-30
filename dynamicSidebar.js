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

const productBoxes = document.querySelectorAll(".productBox");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.3
  }
);

productBoxes.forEach(productBox => observer.observe(productBox));
