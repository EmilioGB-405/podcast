"use strict"

"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sliderContainer = section.querySelector('.cardNewsContent');
    const btnLeft = section.querySelector('.buttonSlider_left');
    const btnRight = section.querySelector('.buttonSlider_right');

    if (!sliderContainer || !btnLeft || !btnRight) return;

    btnLeft.addEventListener('click', () => {
      sliderContainer.scrollBy({
        left: -sliderContainer.clientWidth,
        behavior: 'smooth'
      });
    });

    btnRight.addEventListener('click', () => {
      sliderContainer.scrollBy({
        left: sliderContainer.clientWidth,
        behavior: 'smooth'
      });
    });
  });

});



