"use strict"

let currentSlider = 0;

let  slideContainer =  document.querySelectorAll('.cardNewsContent')

let left =  document.querySelectorAll('.buttonSlider_left');

let right = document.querySelectorAll('.buttonSlider_right')



console.log(slideContainer.length)


function slider(x){
    
   
    slideContainer.forEach((cards, index) =>{   
            
            console.log(slideContainer.item(length))

           const SLIDECHILDREN = cards.querySelectorAll('.card_news')
           console.log(SLIDECHILDREN.length)
          /*   if(x > SLIDECHILDREN.length){currentSlider += 1}
            if(x < 1){currentSlider =  SLIDECHILDREN.length} */
           SLIDECHILDREN.forEach(cardsChildern=>{
                cardsChildern.style.transform = `translateX(${currentSlider * 100}%)`
              
           })
       
        
        
    });

    console.log(currentSlider);
};



left.forEach((buttonleft,n)=>{
    console.log(left.length)
    buttonleft.addEventListener('click',()=>{  
     if(currentSlider > slideContainer.length -1){
            currentSlider +=1 
     }
     if(currentSlider < 1){
        currentSlider = slideContainer.length -4
     }
            

        slider( currentSlider)
    })
})

right.forEach((buttonright)=>{
    buttonright.addEventListener('click',()=>{
       if(currentSlider > slideContainer.length -1){
               currentSlider += 1
       }
       if(currentSlider < 1){
            currentSlider = slideContainer.length - 7
       }
             /* currentSlider -= 1 */
        
        slider( currentSlider)
    })
})

