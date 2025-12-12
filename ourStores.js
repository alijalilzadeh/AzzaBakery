document.querySelectorAll(".mainLinks").forEach(link => {
  link.addEventListener("click", () => {
    const section = link.nextElementSibling;

    if (section && section.classList.contains("underSection")) {
      section.classList.toggle("active");
    }
  });
});

// const citiesMapLinks = document.querySelectorAll("districtsOfBaku districtsLinks a");
// citiesMapLinks.forEach(link => {
//   const underSection = document.querySelector()
// });

const citiesArr = [
  absheron,
  binagadi,
  garadagh,
  khatai,
  khazar,
  narimanov,
  nasimi,
  nizami,
  sabail,
  sabunchi,
  surakhany,
  yasamal,
  ganja,
  mingachevir,
  sumgait
]
