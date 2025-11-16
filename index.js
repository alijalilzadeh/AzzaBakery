
// Navbar Position Fixed

const navbarBox = document.querySelector(".navbar-box");
const azzaSvgLink = document.querySelector(".interier-view .navbar-left a");

const languageSelectionSpanLang1 = document.querySelector(".navbar-box .language-selection .lang1");
const languageSelectionOtherLangs = document.querySelectorAll(".navbar-box .language-selection .optional-lang");

// window Scrolling

const phoneNumber = document.querySelector(".navbar-right .phone-number ");
const phoneNumberText = document.querySelector(".navbar-right .phone-number span");
const phoneIcon = document.querySelector(".navbar-right .phone-number i");

const contactIcons = document.querySelector(".navbar-right .contact-icons a");

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
