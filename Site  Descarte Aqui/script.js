const swiper = new Swiper(".swiper",{
  autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
  loop: true,
  navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination:{
      el: ".swiper-pagination",
  },
  keyboard: true,
  dynamicBullets: true,
});