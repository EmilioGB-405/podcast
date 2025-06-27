"use strict"

let currentSlider = 0;

let  slideContainer =  document.querySelectorAll('.cardNewsContent')

let left =  document.querySelectorAll('.buttonSlider_left');

let right = document.querySelectorAll('.buttonSlider_right')






function slider(x){
    
    console.log(x)

    slideContainer.forEach((cards) =>{   
             

           const SLIDECHILDREN = cards.querySelectorAll('.card_news')
         
           SLIDECHILDREN.forEach((cardsChildern)=>{
                cardsChildern.style.transform = `translateX(${currentSlider * 100}%)`
    
                
              
           })
       
        
        
    });

    /* console.log(currentSlider); */
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




left.forEach((buttonleft,index,array)=>{
    
 /*    console.log(array) */
    buttonleft.addEventListener('click',(eve)=>{  
        console.log(eve.currentTarget)
            ButtonL(currentSlider)
            slider(currentSlider)   
       
    })
})

right.forEach((buttonright,index,array)=>{
   /* console.log(`\n${buttonright}, ${index}, ${array}`) */
    buttonright.addEventListener('click',(eve)=>{
          
            console.log(eve.currentTarget)
            ButtonR(currentSlider)
            slider(currentSlider)
            
     
               
        
})
})

