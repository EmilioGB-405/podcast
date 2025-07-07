"use strict"

"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sliderContainer = section.querySelector('.cardNewsContent');
    const btnLeft = section.querySelector('.buttonSlider_left');
    const btnRight = section.querySelector('.buttonSlider_right');

    if (!sliderContainer || !btnLeft || !btnRight) return;

    btnLeft.addEventListener('click', () => {
      sliderContainer.scrollBy({
        left: -sliderContainer.clientWidth,
        behavior: 'smooth'
      });
    });

    btnRight.addEventListener('click', () => {
      sliderContainer.scrollBy({
        left: sliderContainer.clientWidth,
        behavior: 'smooth'
      });
    });
  });

  // Para sección News Relevant
  const newsSlider = document.querySelector('#new_relevant');
  const btnLeftNews = document.getElementById('left');
  const btnRightNews = document.getElementById('right');

  if (newsSlider && btnLeftNews && btnRightNews) {
    btnLeftNews.addEventListener('click', () => {
      newsSlider.scrollBy({
        left: -newsSlider.clientWidth,
        behavior: 'smooth'
      });
    });

    btnRightNews.addEventListener('click', () => {
      newsSlider.scrollBy({
        left: newsSlider.clientWidth,
        behavior: 'smooth'
      });
    });
  }
});

/* let currentSlider = 0;

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
    

    buttonleft.addEventListener('click',(eve)=>{  
        console.log(eve.currentTarget)
            ButtonL(currentSlider)
            slider(currentSlider)   
       
    })
})

right.forEach((buttonright,index,array)=>{
   
    buttonright.addEventListener('click',(eve)=>{
          
            console.log(eve.currentTarget)
            ButtonR(currentSlider)
            slider(currentSlider)
            
     
               
        
})
}) */

