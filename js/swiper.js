/* swiper slide side-bar */



  var swiper = new Swiper(".slide-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true
    },
    autoplay: {
        delay:2500
    },
    loop: true,
  });



/* swiper slide sale-slide */

var swiper = new Swiper(".sale_sec", {

    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 2000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    breakpoints:{
      1600:{
        slidesPerView: 5,
        spaceBetween: 30
      },
      1200:{
        slidesPerView: 4,
        spaceBetween: 20
      },
      700:{
        slidesPerView: 3,
        spaceBetween: 15
      },
      0:{
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
});  
  
/* swiper slide computer & desktop-slide */

var swiper = new Swiper(".comp_desk_sec", {

  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  breakpoints:{
    1600:{
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200:{
      slidesPerView: 3,
      spaceBetween: 20
    },
    700:{
      slidesPerView: 3,
      spaceBetween: 15
    },
    0:{
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});  

 