"use strict"

let currentSlide = 0;
const left = document.querySelector('.buttonSlider_left');
const right = document.querySelector('.buttonSlider_right');

console.log(left)
console.log(right)

function Slider (n){

    let cards = document.querySelectorAll(".cardNewsContent"); 

  /*   let cardsChildre = cards.children
    console.log(cardsChildre) */
    console.log(cards)
    
    cards.forEach(card =>{

         card.style.transform = `translateX(-${n * 100}%)`;
            /* console.log(card.childNodes)
            for (let cards = 0; index < array.length; index++) {
                
                
            } */
    });
    currentSlide = n
}
Slider()

/* left.addEventListener('click', () =>{
    Slider(currentSlide -1)
})

right.addEventListener('click', ()=>{
    Slider(currentSlide + 1)
}) */




/* console.log(cards) */
/* console.log(cardSlider) */
