document.querySelectorAll(".mainLinks").forEach(link => {
  link.addEventListener("click", () => {
    const section = link.nextElementSibling;

    if (section && section.classList.contains("underSection")) {
      section.classList.toggle("active");
    }
  });
});
