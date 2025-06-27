"use strict"

let currentSlider = 0;

let  slideContainer =  document.querySelectorAll('.cardNewsContent')

let left =  document.querySelectorAll('.buttonSlider_left');

let right = document.querySelectorAll('.buttonSlider_right')

function slider(){
    
   
    slideContainer.forEach((cards) =>{   
            
         

           const SLIDECHILDREN = cards.querySelectorAll('.card_news')
         
           SLIDECHILDREN.forEach((cardsChildern)=>{
            
                cardsChildern.style.transform = `translateX(${currentSlider * 100}%)`
    
                
              
           })
       
        
        
    });

    console.log(currentSlider);
};


function ButtonL(){
    
     if(currentSlider > slideContainer.length -1){
            currentSlider +=1 
     }
     if(currentSlider < 1){

        currentSlider = slideContainer.length - 4
     }
}


function ButtonR(){
     if(currentSlider > slideContainer.length -1){

               currentSlider += 1
     }

    if(currentSlider < 1){

         currentSlider = slideContainer.length - 7.28
                
    } 
}


left.forEach((buttonleft,index)=>{
    
 /*    console.log(array) */
    buttonleft.addEventListener('click',(eve)=>{  
     
        
      
            ButtonL(currentSlider[index])
            slider(currentSlider)
       

            
       
    })
})

right.forEach((buttonright,index)=>{
   /* console.log(`\n${buttonright}, ${index}, ${array}`) */
    buttonright.addEventListener('click',(eve)=>{
          
            ButtonR(currentSlider)
            slider(currentSlider)
           
           
        
})
})
/* leftButtons.forEach((left, index) => {
    left.addEventListener('click', () => {
        
    });
}); */
