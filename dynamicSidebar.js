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
  const existingContent = document.querySelector(".bannerPart");
  const existingContentImg = document.querySelector(".bannerPart .img-part img")
  const mainSection = document.getElementById("main");
  const bakeryType = document.querySelectorAll(".bannerPart p");

  const firstP = bakeryType[0] || null;
  const secondP = bakeryType[1] || null;

  let contentHTML = "";
  const currentPage = window.location.pathname.split("/").pop().toLowerCase();
  console.log(currentPage)

  if (!document.querySelector(".responsiveViewContent")) {
    const responsiveViewContent = document.createElement("div");
    responsiveViewContent.className = "responsiveViewContent";
    if (currentPage === "production.html" || currentPage === "aboutus.html") {
      contentHTML = `
    <div class="responsiveBox">
      <div class="upperBox">
        <div class="circle-line">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <h3 class="product-title">${firstP ? firstP.innerText : ""}</h3>
        <div class="circle-line">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <p class="descriptionP">${secondP ? secondP.innerText : ""}</p>
      </div>
      <div class="imgContent">
        <img src="${existingContentImg ? existingContentImg.src : ""}">
      </div>
    </div>
  `;
    }
    else if (currentPage === "careers.html") {
      contentHTML = `
    <div class="responsiveBox">
      <div class="upperBox">
        <div class="circle-line">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <h3 class="product-title">${firstP ? firstP.innerText : ""}</h3>
        <div class="circle-line">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <div class="responsiveInput">
          <input type="text" placeholder="Find a job">
          <span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>
    </div>
  `;
    }
     else if (currentPage === "certificates.html") {
      contentHTML = `
    <div class="responsiveBox">
      <div class="upperBox">
        <div class="circle-line">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <h3 class="product-title">${firstP ? firstP.innerText : ""}</h3>
        <div class="circle-line">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <div class="imgContent">
        <img src="logoImages/certificatesbg.webp">
      </div>
      </div>
    </div>
  `;
    }
    else {
      contentHTML = `
    <div class="responsiveBox">
      <div class="upperBox">
        <div class="circle-line">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <h3 class="product-title">${firstP ? firstP.innerText : ""}</h3>
        <div class="circle-line">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <p class="azzaProductType">${secondP ? secondP.innerText : ""}</p>
      </div>
      <div class="imgContent">
        <img src="${existingContentImg ? existingContentImg.src : ""}">
      </div>
    </div>
  `;
    }

    responsiveViewContent.innerHTML = contentHTML;
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
    document.querySelector(".bannerPart").style.display = "flex";
  }
});
