"use strict"





let currentSlider;

/* let slides =document.querySelectorAll('.card_news'); */

/* let slidesParent = document.querySelectorAll('.cardNewsContent') */

let section =  document.querySelectorAll('section');

let left =  document.querySelectorAll('.buttonSlider_left')

console.log(section)

console.log(left)
/* console.log(slidesParent) */

let i = 0;

left.forEach(buttonLeft=>{
    section.forEach(parent=>{
       /*  console.log(`\nProcesando padre: <${parent.tagName}>`) */

        const SECTIONCHILDREN = parent.querySelectorAll('.cardNewsContent')
        
        SECTIONCHILDREN.forEach(child=>{
            /* console.log(SECTIONCHILDREN.length) */
            console.log(child.children.length)
            
            if(child.children.length > 0){
                /* child.firstElementChild.style.backgroundColor = "red"
                child.children.item(1).style.backgroundColor = "blue"
                child.children.item(2).style.backgroundColor = "blue"
                child.lastElementChild.style.backgroundColor = "green" */
                /* SECTIONCHILDREN.style.backgroundColor = 'red' */
                child.style.transform = "translateX(-50%))"
            }
        })

      /*   console.log(SECTIONCHILDREN.length) */
        /* if(SECTIONCHILDREN.length == 0 && left.length == 0){
            SECTIONCHILDREN.forEach(child=>{
            buttonLeft.addEventListener('click',()=>{
                 child.style.backgroundColor = "white"
            })
             

            })
        } 
        else{
            console.log('este padre no tiene hijos')
        } */
    })
})



/* slidesParent.forEach(slide=>{
     console.log(`\nProcesando padre: <${slide.tagName}> con clase "${slide.className}"`)
     const ChildSliders = slide.querySelectorAll('.')
}) */
/* let slides =  */

/* let left =  document.querySelectorAll('.buttonSlider_left');

let right = document.querySelectorAll('.buttonSlider_right') */
/* let section = document.querySelectorAll('section') */





/* console.log(slidesContainer) */
/* console.log(left)
console.log(slides) */
/* console.log(section) */




function slider(){
    

/* for(let i = 0; i <= slidesContainer.length ; i++){
    let hijos = slidesContainer[i];
    let nietos = hijos.children
    console.log(hijos)
    for(let j = 0; j<= nietos.length; j++){
        let nieto =nietos[j]
        console.log(nieto)
    }
    
} */
/* left.forEach(buttonLeft=>{
    
}) */






/* slidesContainer.forEach(container=>{
       
       
}) */






    
/* left.forEach((buttonleft)=>{



     slides.forEach(cards =>{
            buttonleft.addEventListener('click',()=>{
                 cards.style.transform = "translateX(0%)"
            })
    })


    


  
})


right.forEach((buttonright)=>{
   
slides.forEach(cards=>{
    console.log(cards)
    buttonright.addEventListener('click',()=>{
      
        cards.style.transform = "translateX(-50%)"
    })
})  
}) */


   
    
    
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