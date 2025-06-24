"use strict"



let currentSlider;

let slides =document.querySelectorAll('.card_news');

let slidesContainer = document.querySelectorAll('.cardNewsContent')

let left =  document.querySelectorAll('.buttonSlider_left');

let right = document.querySelectorAll('.buttonSlider_right')


/* let slidesChildren = Array(slides)

let slidesFilter = slidesChildren.filter(slidechild => slidechild.slidesContainer) */

/* console.log(slidesFilter)

console.log(slidesChildren) */

console.log(slidesContainer)
console.log(left)
console.log(slides)

/* console.log(left)

console.log(slides) */

/* left.forEach(buttonleft=>{
    buttonleft.addEventListener('click',()=>{
        slides.forEach(cards=>{
            cards.style.left='50px'
        })
    })
}) */

function slider(l = 0){
    


    
left.forEach((buttonleft)=>{

    slidesContainer.forEach((card,index)=>{
        /* console.log(card.children.length) */
        console.log(index)
        console.log(card)

        buttonleft.addEventListener("click",()=>{
        if(index == 0 && left.length == 0){
            card.style.transform = "translate(0%)"
        }
            /* if(){
                    card.children.item(n).style.transform = "translate(0%)"
             }     */
        })
    })
        
    
    
    

   /*  slidesContainer.forEach((card,n)=>{ 
    
       slidesChildren. 
        
        buttonleft.addEventListener('click',()=>{
            if(slidesContainer.length == 0 && left.length == 0 ){

                    card.childNodes.item(n).style.transform = 'translate(0%)'
                
                
            }
            
       
            
           
        })
    }) */
    
})

right.forEach((buttonright)=>{
  /*   console.log(buttonright)
    slidesContainer.forEach((card,n)=>{

        
        console.log(card.children)
        buttonright.addEventListener('click',()=>{
            if(slidesContainer.length == 0){
                card.children.item(n).style.transform = 'translate(-20%)'
            }
        })
    })
    buttonright.addEventListener('click',()=>{
        slider(currentSlider += 1)

    }) */
})


   
    /* currentSlider = l;
    console.log(currentSlider) */
    
};
slider()
 /* slider(currentSlider -= 1)  */
             /* slides.forEach((cards) =>{  
                 console.log(cards.children.item(n))
                cards.stye.c
            });  */    



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