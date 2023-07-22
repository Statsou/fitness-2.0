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
}



const createListenerSwipe = function () {
  if (document.getElementById('swiperPrevReviews') && document.getElementById('swiperNextReviews')) {
    const swiperPrevReviews = document.getElementById('swiperPrevReviews');
    const swiperNextReviews = document.getElementById('swiperNextReviews');

    swiperPrevReviews.addEventListener('click', () => {
      swiperReviews.slidePrev();
    });
    swiperNextReviews.addEventListener('click', () => {
      swiperReviews.slideNext();
    });
  }

  if (document.getElementById('swiperPrevTrainers') && document.getElementById('swiperNextTrainers')) {
    const swiperPrevTrainers = document.getElementById('swiperPrevTrainers');
    const swiperNextTrainers = document.getElementById('swiperNextTrainers');

    swiperPrevTrainers.addEventListener('click', () => {
      swiperTrainers.slidePrev();
    });
    swiperNextTrainers.addEventListener('click', () => {
      swiperTrainers.slideNext();
    });
  }
};

export {swiperSettings, createListenerSwipe};
