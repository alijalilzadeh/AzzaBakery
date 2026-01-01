const vodkaData = {
  BELARUS: [
    "AKVADIV", "ALPHA LINE", "BELALCO", "BREST LITOVSK",
    "GLUBINA", "ROYAL BISON", "SOKROVISHE BELARUSI",
    "SOLODOVAYA", "VERBA"
  ],
  FRANCE: ["EKISS", "YZ"],
  GERMANY: ["DANZKA", "THREE SIXTY"],
  LITHUANIA: ["BARSKA", "OBELIU", "SOBIESKI"],
  MOLDOVA: ["ZERNOFF"],
  NETHERLANDS: ["ESBJAERG"],
  POLLAND: ["KRUPNIK"],
  RUSSIAN: [
    "99999 GOLD", "BELAYA BEREZKA", "HUSKY",
    "PARTNER", "PYAT OZER", "REMESLO", "VOLODINKA"
  ],
  UKRAIN: ["ALEF VINAL", "UKRAINKA"]
};

const wineData = {
  AFRICA : ["LUTZVILLE"],
  CHILE :["EL AROMO"],
  FRANCE : ["BERNARD MAGREZ","BORDERIE","BOUGRIER","BROTTE","DOMAINE COLOMBIER","FAMILLE DOUBLET","PAUL MAS","TROCARD","VILLEBOIS","WOLFBERGER"],
  GEORGIA : ["DURUJI VALLEY","KAKHURI GVINIS MARANI","KONCHO"],
  ITALY : ["BORTOLOMIOL","CANTINE POVERO","CARPINETO","COLLOSORBO","DEMARIE","DI CAMILLO","KALTERN","MONTE DEL FRA","MOTTURA","PONTE","TENUTE GIROLAMO","TINAZZI","TOMBACCO"],
  MOLDOVA : ["VARTELY"],
  PORTUGAL : ["CASA SANTOS LIMA","SOGRAPE"],
  SPAIN : ["GONZALES BYASS"]
}

const countriesVodkaLinks = document.querySelectorAll(".alchoholCountriesLinks span");
const alchoholLinksContainer = document.querySelector(".alchoholLinks");

countriesVodkaLinks.forEach((link) => {
  link.addEventListener("click", () => {

    countriesVodkaLinks.forEach(l => l.classList.remove("activeLink"));
    link.classList.add("activeLink");

    const countryName = link.textContent.trim();

    alchoholLinksContainer.innerHTML = "";
    if (vodkaData[countryName]) {
      vodkaData[countryName].forEach((brand) => {
        const aTag = document.createElement("a");
        aTag.href = "#";
        aTag.textContent = brand;
        alchoholLinksContainer.appendChild(aTag);
      });
    }
  });
});
countriesVodkaLinks[0].click();


// console.log(vodkaData.Ukraine[0],vodkaData.Ukraine[1])