"use strict"

let slider = document.querySelectorAll('.cardNewsContent');
let sliderIndex = 0;
let cardWidth = document.querySelectorAll('.card_news');

let leftButtons = document.querySelectorAll('.buttonSlider_left');
let rightButtons = document.querySelectorAll('.buttonSlider_right');

function  showMove () {
    for (let index = 0; index < slider.length; index++) {
        
        slider.style.transform = "translateX(10px)"
        
    }
}

showMove()
leftButtons.forEach((left) =>{
    left.addEventListener('click', () =>{
        if (sliderIndex < cardWidth.length-1) {
            sliderIndex++
            
        }
    })
})
