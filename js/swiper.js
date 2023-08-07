'use strict';
const photoSlider = new Swiper('.swiper', {
  effect: 'fade',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 2000,
});
