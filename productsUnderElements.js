const underLinks = document.querySelector(".hamburgerBox .sections-part .underrow");
const underProducts = document.querySelector(".hamburgerBox .sections-part .underproducts");

 underLinks.addEventListener("click",()=>{
  underProducts.classList.toggle("open")
 })