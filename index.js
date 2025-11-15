// Sidebar Opening/Closing

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

// Navbar Position Fixed

const navbarBox = document.querySelector(".navbar-box");
const azzaSvgLink = document.querySelector(".interier-view .navbar-left a");

const languageSelectionSpanLang1 = document.querySelector(".navbar-box .language-selection .lang1");
const languageSelectionOtherLangs = document.querySelectorAll(".navbar-box .language-selection .optional-lang");


window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    navbarBox.classList.add("fixed");
    azzaSvgLink.style.display = "block";

    languageSelectionSpanLang1.classList.add("scroll");
    // languageSelectionOtherLangs.forEach(lang => {
    //   lang.classList.remove("deactive")
    //   lang.classList.add("active")
    // });
    hamburgerIcon.style.color = "#4B2613";
  } else {
    navbarBox.classList.remove("fixed");
    azzaSvgLink.style.display = "none";
    hamburgerIcon.style.color = "";

    languageSelectionSpanLang1.classList.remove("scroll");
    //  languageSelectionOtherLangs.forEach(lang => {
    //   lang.classList.remove("active");
    //   lang.classList.add("deactive");

    // });
  }
});


languageSelectionSpanLang1.addEventListener("click", () => {
  languageSelectionOtherLangs.forEach(lang => {
    lang.classList.toggle("active");
  });

  if(window.scrollY > 400){
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
