var swiper = new Swiper('.swiper-container', {
    
    centeredSlides: false,
    autoplay: true,
    delay: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      800:{
        slidesPerView: 3,
        spaceBetween: 20,
      },
      
      1080:{
        slidesPerView: 3,
        spaceBetween: 2,
      },
      1400:{
        slidesPerView: 4,
        spaceBetween: 2,
      },

      1500:{
        slidesPerView: 5,
        spaceBetween: 2,
      },
      1600:{
        slidesPerView: 5,
        spaceBetween: 2,
      },
      1700:{
        slidesPerView: 6,
        spaceBetween: 2,
      },
    
      1900:{
        slidesPerView: 6,
        spaceBetween: 2,
      },
      2100:{
        slidesPerView: 7,
        spaceBetween: 2,
      },
      2200:{
        slidesPerView: 8,
        spaceBetween: 2,
      },
    }
    
  });
    
