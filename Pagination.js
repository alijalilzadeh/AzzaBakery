  const swiper = new Swiper(".mySwiper", {
      loop: true,
      speed: 800,
      centeredSlides: true,
      spaceBetween: 30,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    })