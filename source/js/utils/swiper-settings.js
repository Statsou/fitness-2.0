const swiperSettings = function () {
  const swiperReviews = new Swiper('.swiper-reviews', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    navigation: {
      nextEl: '.swiper-reviews-button-next',
      prevEl: '.swiper-reviews-button-prev',
    },
  });


  const swiperTrainers = new Swiper('.swiper-trainers', {
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    initialSlide: 2,
    navigation: {
      nextEl: '.swiper-trainers-button-next',
      prevEl: '.swiper-trainers-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },
  });
};

export {swiperSettings};
