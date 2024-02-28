$(document).ready(function() {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: 3, 
    });
;})