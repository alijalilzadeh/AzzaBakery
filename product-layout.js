const productBoxes = document.querySelectorAll(".importedGroceryBox");

function updateLayout() {
  if (window.innerWidth > 768) {
    productBoxes.forEach((box, index) => {
      box.style.flexDirection = index % 2 === 0 ? "row" : "row-reverse";
    });
  } else {
    productBoxes.forEach((box) => {
      box.style.flexDirection = "column-reverse";
    });
  }
}

updateLayout();

window.addEventListener("resize", updateLayout);