const hamburgerIcon = document.querySelector('.fa-bars');
const xMark = document.querySelector(".upper-part .fa-xmark")
const hamburgerSidebar = document.querySelector(".hamburgerSidebar")
hamburgerIcon.addEventListener("click", () => {
  hamburgerSidebar.classList.remove("closing")
  hamburgerSidebar.classList.toggle("opening");
})

xMark.addEventListener("click", () => {
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

const cakeLinks = document.querySelectorAll(".cakeLinks a");
const currentPage = window.location.pathname.split("/").pop();

cakeLinks.forEach(cakeLink => {
  if (cakeLink.getAttribute("href") === currentPage) {
    cakeLink.classList.add("selected");
  }
  cakeLink.addEventListener("click", () => {
    cakeLink.forEach(l => l.classList.remove("selected"));

    cakeLink.classList.add("selected");
  })

})
function figuringResponsive() {
  // Banner word
  const existingContent = document.querySelector(".mainCakeImagePart");
  const existingContentImg = document.querySelector(".mainCakeImagePart .img-part img")
  const mainSection = document.getElementById("main");
  const bakeryType = document.querySelectorAll(".mainCakeImagePart p");
  let bakeType = "";
  bakeryType.forEach((type,index) => {
    if (type !== "PRODUCTS") {
      bakeType = type;
    }
  })

  if (!document.querySelector(".responsiveViewContent")) {
    const responsiveViewContent = document.createElement("div");
    responsiveViewContent.className = "responsiveViewContent";
    responsiveViewContent.innerHTML = `
      <div class="responsiveBox">
        <div class="upperBox">
          <h3 class="product-title">PRODUCTS</h3>
          <div class="circle-line">
            <div class="line"></div>
            <div class="circle"></div>
            <div class="line"></div>
          </div>
          <h2 class="azzaProductType">${bakeType.innerText}</h2>
          <div class="circle-line">
            <div class="line"></div>
            <div class="circle"></div>
            <div class="line"></div>
          </div>
        </div>
        <div class="imgContent">
          <img src="${existingContentImg.src}">
        </div>
      </div>
    `;

    if (window.innerWidth < 768) {
      existingContent.style.display = "none";
      mainSection.prepend(responsiveViewContent);
    }
  }
}

figuringResponsive();

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    figuringResponsive();
  } else {
    const responsiveEl = document.querySelector(".responsiveViewContent");
    if (responsiveEl) responsiveEl.remove();
    document.querySelector(".mainCakeImagePart").style.display = "flex";
  }
});
