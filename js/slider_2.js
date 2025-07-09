"use strict"







let currentSlider = 0;

let slides =document.querySelectorAll('.cardNewsContent');

let left =  document.querySelectorAll('.buttonSlider_left')

let right = document.querySelectorAll('.buttonSlider_right')


console.log(slides)



function slider(n = 0){
    
   
    slides.forEach((cards, index) =>{   
      /*   console.log(slides.item(n)) */
        console.log(cards.children.item(n))
       
    });

   
    currentSlider = n;
    /* console.log(currentSlider) */
    
};
slider()

left.forEach((buttonleft,index)=>{
  /*   console.log(index)
    console.log(buttonleft) */
    buttonleft.addEventListener('click',()=>{
        slider(currentSlider -= 1)
    })
})

right.forEach((buttonright,index)=>{
   /*  console.log(buttonright) */
    buttonright.addEventListener('click',()=>{
       slider(currentSlider += 1)
    })
})


/* slider(counterSlider); */


/* function buttonSlide(){
    slider(counterSlider += 1)
}; */


/*  if(n > slides.length){ counterSlider = 1};

    if(n < 1){counterSlider = slides.length};
   
    slides.forEach(cards=>{

        console.log(cards);

        cards.style.transform = `translate(${n*100})`;

    }); */


/* 
function slideBotton(n){
    slider(slideBotton += n)
} */




/* let currentSlide = 0;
const left = document.querySelector('.buttonSlider_left');
const right = document.querySelector('.buttonSlider_right');

console.log(left)
console.log(right)

function Slider (n){

    let cards = document.querySelectorAll(".cardNewsContent"); 
  
    console.log(cards.length)
    for (let i = 0; i < cards.length; i++) {
        let val = cards[i];
            console.log(val)
            v
       left.addEventListener('click', ()=>{
            
       })
    }
    
    
    
   currentSlide = n 
}
Slider()

left.addEventListener('click', () =>{
    Slider(currentSlide -1)
})

console.log(left)

right.addEventListener('click', ()=>{
    Slider(currentSlide + 1)
}) */

/* console.log(right)
cards.forEach(card =>{
        card.style.transform = `translate(-${n * 100}%);`
       
    }); */


/* console.log(cards) */
/* console.log(cardSlider) */
 /*  console.log(card.children)
         card.style.transform = `translateX(-${n * 100}%)`; */

/*   let cardsChildre = cards.children
    console.log(cardsChildre) */

    /* for(i = 0; i < slides.length; i++){
        let val = slides[i]
        console.log(val)
        val.style.transform = `translate(${n * 100})`;
    } */