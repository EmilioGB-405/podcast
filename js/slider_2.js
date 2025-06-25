"use strict"







let currentSlider;


let cards =  document.querySelectorAll('.card_news');

let left =  document.querySelectorAll('.buttonSlider_left')

let right = document.querySelectorAll('.buttonSlider_right')

console.log(cards)

console.log(left)






/*  */







function slider(n = 0){
    
if(n > cards.length ){currentSlider = 1}
if(n < 1){currentSlider = cards.length}
currentSlider = n;

console.log(currentSlider)   
};
slider()


left.forEach(buttonLeft=>{
   
    buttonLeft.addEventListener('click',()=>{
        slider(currentSlider -=1)
        cards.forEach(card=>{
            card.style.transform = "translateX(-100%)"
        })
    })
})









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

     /*   slides.forEach((card,n)=>{
           
                 if(cardContainer.children.length === 0 && left.length == 0){
                    cardContainer.children.item(index).style.transform = "translate(0%)"
                }
            }) */
               
                /* if(){
                        card.children.item(n).style.transform = "translate(0%)"
                 }     */
                /* console.log(buttonleft.children.length) */
/* console.log(left.length) */
    /* slidesContainer.forEach((cardContainer,index)=>{
      
        slides.forEach(n =>{
            console.log(cardContainer[1])
             buttonleft.addEventListener("click",()=>{
                 if(cardContainer[n] == 0 && left.length == 0){
                     slides.style.transform = "translateX(-40%)"
                  }
              
            })   
        })       
    }) */
        
    
    
    
/* 
    slides.forEach((card,n)=>{ 
        
        buttonleft.addEventListener('click',()=>{
            if(slides.length == 0 && left.length == 0 ){

                    card.childNodes.item(n).style.transform = 'translate(50%)'
                
                
            }
            
       
            
           
        })
    }) */
   /*  slidesContainer.forEach((card,n)=>{
        console.log(card.children)
        buttonright.addEventListener('click',()=>{
            if(slidesContainer.length == 0){
                card.children.item(n).style.transform = 'translate(-20%)'
            }
        })
    }) */
    /* buttonright.addEventListener('click',()=>{
        slider(currentSlider += 1)

    }) */

      /* child.firstElementChild.style.backgroundColor = "red"
                    child.children.item(1).style.backgroundColor = "blue"
                    child.children.item(2).style.backgroundColor = "blue"
                    child.lastElementChild.style.backgroundColor = "green" */
                    /* child.style.backgroundColor="white" */
                /* SECTIONCHILDREN.style.backgroundColor = 'red' */

/* left.forEach(buttonLeft=>{
    const LEFTCHILDRE = buttonLeft.querySelectorAll('img')
    
    console.log(left[0])
    section.forEach(parent=>{
       

        const SECTIONCHILDREN = parent.querySelectorAll('.cardNewsContent')
    
        SECTIONCHILDREN.forEach(child=>{
            const CARDCHILDREN = child.querySelectorAll(".card_news")
            console.log(CARDCHILDREN)
            CARDCHILDREN.forEach(cards=>{
                console.log(cards[1])
                buttonLeft.addEventListener("click",(l)=>{
                    console.log(l)
                    if(cards.children.item(l) && buttonLeft.children.item(l) == 0){
                        cards.children.item(l).style.transform = "translateX(-100%)"
                    }
                })
            })
            
            
        })

     
    })
}) */