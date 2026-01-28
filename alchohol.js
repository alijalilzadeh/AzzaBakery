// Alchohol products
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
  POLAND: ["KRUPNIK"],
  RUSSIAN: [
    "99999 GOLD", "BELAYA BEREZKA", "HUSKY",
    "PARTNER", "PYAT OZER", "REMESLO", "VOLODINKA"
  ],
  UKRAIN: ["ALEF VINAL", "UKRAINKA"]
};

const wineData = {
  AFRICA: ["LUTZVILLE"],
  CHILE: ["EL AROMO"],
  FRANCE: ["BERNARD MAGREZ", "BORDERIE", "BOUGRIER", "BROTTE", "DOMAINE COLOMBIER", "FAMILLE DOUBLET", "PAUL MAS", "TROCARD", "VILLEBOIS", "WOLFBERGER"],
  GEORGIA: ["DURUJI VALLEY", "KAKHURI GVINIS MARANI", "KONCHO"],
  ITALY: ["BORTOLOMIOL", "CANTINE POVERO", "CARPINETO", "COLLOSORBO", "DEMARIE", "DI CAMILLO", "KALTERN", "MONTE DEL FRA", "MOTTURA", "PONTE", "TENUTE GIROLAMO", "TINAZZI", "TOMBACCO"],
  MOLDOVA: ["VARTELY"],
  PORTUGAL: ["CASA SANTOS LIMA", "SOGRAPE"],
  SPAIN: ["GONZALES BYASS"]
}

const cogncaData = {
  FRANCE: ["ABECASSIS", "DEAU", "GAUTIER", "ROLAND BRU"]
}

const whiskeyData = {
  FRANCE: ["WILLIAM PEEL"],
  IRELAND: ["HYDE"],
  SCOTLAND: ["GLEN TALLOCH", "GRAND MACNISH", "ISLAY MIST", "LAUDERS"],

}

const tequilaData = {
  MEXICO: ["CASA MAESTRI", "SAN JOSE"],
}

const otherDrinks = {
  FRANCE: ["DOLIN", "MARIE BRIZARD"],
  ITALY: ["MAZZETTI"],
  LITHUANIA: ["EL GALIPOTE"],
  NETHERLANDS: ["BOOMSMA", "OLD CAPTAIN RUM"]
}

const beerData = {
  GERMANY: ["KAISERDOM"]
}


// bütün məhsul boxlarını götürürük
const productBoxes = document.querySelectorAll(".alchoholProductsImageBox");

productBoxes.forEach((box) => {
  const countriesLinks = box.querySelectorAll(".alchoholCountriesLinks span");
  const linksContainer = box.querySelector(".alchoholLinks");

  // hansı data istifadə ediləcəyini box-un tipinə görə seçirik
  const alcoholType = box.querySelector(".alchoholType").textContent.trim();
  let data;
  switch(alcoholType) {
    case "VODKA": data = vodkaData; break;
    case "WINE": data = wineData; break;
    case "COGNAC": data = cogncaData; break;
    case "WHISKEY": data = whiskeyData; break;
    case "TEQUILA": data = tequilaData; break;
    case "OTHER DRINKS": data = otherDrinks; break;
    case "BEER": data = beerData; break;
    default: data = {};
  }

  countriesLinks.forEach((link) => {
    link.addEventListener("click", () => {
      countriesLinks.forEach(l => l.classList.remove("activeLink"));
      link.classList.add("activeLink");

      const countryName = link.textContent.trim();
      linksContainer.innerHTML = "";

      if (data[countryName]) {
        data[countryName].forEach((brand) => {
          const aTag = document.createElement("a");
          aTag.href = "#";
          aTag.textContent = brand;
          linksContainer.appendChild(aTag);
        });
      }
    });
  });

  if (countriesLinks[0]) countriesLinks[0].click();
});
