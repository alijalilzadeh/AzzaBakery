const moreDetailData = [
  {
    "product": "cake",
    "Product Names": [
      {
        "id": 1,
        "name": "Noisette",
        "price": 21.90,
        "ingredients": "White sponge cake crumbs, vanilla powder, drinking water, gelatin, butter, condensed milk, finely milled flour, almonds, hazelnuts, powdered sugar, baking powder, vegetable cream, milk toffee paste, salt, emulsifier, eggs.",
        "size": "10 (person) - 21.90 AZN",
        "images": ["noisette.jpg", "noisette2.jpg", "noisette3.jpg"]

      },
      {
        "id": 2,
        "name": "Raspberry yogurt",
        "price": 19.90,
        "ingredients": "White biscuit crumbs, fine flour, powdered sugar, baking powder, vanilla powder, eggs, emulsifier, drinking water, milk, plant-based cream, gelatin, yogurt, frozen raspberries, cornstarch, butter, powdered sugar",
        "size": "10 (person) - 19.90 AZN",
        "images": ["raspberryYogurt1.jpg", "raspberryYogurt2.jpg", "raspberryYogurt3.jpg"]
      },
      {
        "id": 3,
        "name": "Mascotte",
        "price": 19.90,
        "ingredients": "dark biscuit crumbs, fine flour, powdered sugar, baking powder, eggs, emulsifier, cocoa, drinking water, caramel jelly, vanilla powder, corn starch, butter, milk, condensed milk, walnut kernels, hazelnut kernels, powdered sugar",
        "size": "10 (person) - 19.90 AZN",
        "images": ["mascotte1.jpg", "mascotte2.jpg", "mascotte3.jpg"]
      },
      {
        "id": 4,
        "name": "Mocha",
        "price": 12.90,
        "ingredients": "dark biscuit crumbs, fine flour, powdered sugar, baking powder, eggs, emulsifier, cocoa, drinking water, caramel jelly, vanilla powder, corn starch, butter, milk, condensed milk, walnut kernels, hazelnut kernels, powdered sugar",
        "size": ["5 (person) - 12.90 AZN", "10 (person) - 22.90 AZN", "15 (person) - 29.90 AZN"],
        "images": ["mocha1.jpg", "mocha2.jpg", "mocha3.jpg"]
      },
      {
        "id": 5,
        "name": "Skazka Chocolate",
        "price": 13.90,
        "ingredients": "vanilla, water, syrup, gelatin, cocoa, marmalade, butter, condensed milk, flour, powdered sugar, baking powder, vegetable cream, black chocolate, emulsifier, eggs.",
        "size": "5 (person) - 13.90 AZN",
        "images": ["mocha1.jpg", "mocha2.jpg", "mocha3.jpg"]
      },
    ]

  }
]

const pageSwiper = new Swiper(".paginationContent", {
  loop: true,
  speed: 800,
  centeredSlides: true,
  spaceBetween: 5,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
})

const moreDetailsLinks = document.querySelectorAll(".productBox a");
