const languageSelectionSpanLang1 = document.querySelector(".navbar-box .language-selection .lang1");
const languageSelectionOtherLangs = document.querySelectorAll(".navbar-box .language-selection .optional-lang");


languageSelectionSpanLang1.addEventListener("click", () => {
  languageSelectionOtherLangs.forEach(lang => {
    lang.classList.toggle("active");
  });
});