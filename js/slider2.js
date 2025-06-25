"use strict"

let currentSlider = 0;

let slides =document.querySelectorAll('.card_news');

let left =  document.querySelectorAll('.buttonSlider_left');

let right = document.querySelectorAll('.buttonSlider_right')

let slidesLength = slides.length


console.log(slidesLength)

console.log(slides)



function slider(x){
    
   
    slides.forEach((cards, index) =>{   
        /* console.log(index) */
        /* console.log(cards.children.item(x)) */
        cards.style.transform = "translateX(100%)"
        /* cards.animate() */
    });


    
};



left.forEach((buttonleft,index)=>{
    buttonleft.addEventListener('click',()=>{
       if(currentSlider < slidesLength ){
            currentSlider -= 300
       }
        slider( currentSlider)
    })
})

right.forEach((buttonright,index)=>{
   /*  console.log(buttonright) */
    buttonright.addEventListener('click',()=>{
        if(currentSlider < slidesLength)
        currentSlider += 300
        slider( currentSlider)
    })
})

