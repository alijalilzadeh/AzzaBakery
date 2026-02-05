
// Navbar Position Fixed

const navbarBox = document.querySelector(".navbar-box");
const azzaSvgLink = document.querySelector(".interier-view .navbar-left a");

const languageSelectionSpanLang1 = document.querySelector(".navbar-box .language-selection .lang1");
const languageSelectionOtherLangs = document.querySelectorAll(".navbar-box .language-selection .optional-lang");

// window Scrolling

const phoneNumber = document.querySelector(".navbar-right .phone-number ");
const phoneNumberText = document.querySelector(".navbar-right .phone-number span");
const phoneIcon = document.querySelector(".navbar-right .phone-number i");

const contactIcons = document.querySelectorAll(".contact-icons a");

window.addEventListener("scroll", () => {
  const isBigger = window.scrollY > 400;

  navbarBox.classList.toggle("fixed", isBigger);
  azzaSvgLink.style.display = isBigger ? "block" : "none";

  languageSelectionSpanLang1.classList.toggle("scroll", isBigger);

  hamburgerIcon.style.color = isBigger ? "#4B2613" : "";

  phoneNumber.classList.toggle("bigger400", isBigger);
  phoneNumberText.classList.toggle("bigger400", isBigger);
  phoneIcon.classList.toggle("bigger400", isBigger);

  contactIcons.forEach(icon => {
    icon.classList.toggle("bigger400",isBigger);
  });

});

languageSelectionSpanLang1.addEventListener("click", () => {
  languageSelectionOtherLangs.forEach(lang => {
    lang.classList.toggle("active");
  });

  if (window.scrollY > 400) {

    languageSelectionOtherLangs.forEach(lang => {
      lang.classList.remove("white");
      lang.classList.add("brown");
    });
  } else {
    languageSelectionOtherLangs.forEach(lang => {
      lang.classList.remove("brown");
      lang.classList.add("white");
    });
  }
});


function figuringResponsive() {
  const existingGallery = document.querySelector("#galleryAzza");
  const mainSection = document.getElementById("main");
  
  let contentHTML = "";
  console.log(currentPage)

  if (!document.querySelector(".gallery-slider")) {
    const gallerySlider = document.createElement("div");
    gallerySlider.className = "gallery-slider";
      contentHTML = `
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">

          <div class="swiper-slide">
            <img src="galleryImages/1stgallery.jpg">
          </div>

          <div class="swiper-slide">
            <img src="galleryImages/2ndgallery.jpg">
          </div>

          <div class="swiper-slide">
            <img src="galleryImages/3rdgallery.jpg">
          </div>

          <div class="swiper-slide">
            <img src="galleryImages/4thgallery.jpg">
          </div>

          <div class="swiper-slide">
            <img src="galleryImages/5thgallery.jpg">
          </div>

          <div class="swiper-slide">
            <img src="galleryImages/6thgallery.jpg">
          </div>

        </div>
        <div class="swiper-button-prev">
          <i class="fa-solid fa-arrow-left"></i>
        </div>

        <div class="swiper-button-next">
          <i class="fa-solid fa-arrow-right"></i>
        </div>

        <div class="swiper-pagination"></div>
      </div>
  `;
    }
    gallerySlider.innerHTML = contentHTML;
    if (window.innerWidth < 768) {
      existingGallery.style.display = "none";
      mainSection.prepend(responsiveViewContent);
    }
  }
figuringResponsive();

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    figuringResponsive();
  } else {
    const galerySliderEl = document.querySelector(".gallery-slider");
    if (galerySliderEl) galerySliderEl.remove();
    document.querySelector(".existingGallery").style.display = "flex";
  }
});
