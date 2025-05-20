function ScrollAnimation(){
    let scrollposition;

    let leaf = document.querySelector('body')
    console.log(leaf)

    scrollposition = leaf.scrollTop

    leaf.addEventListener('scroll',()=>{
       
        if(scrollposition === 0){
            console.log('estas en position 0')
        } else {
            console.log('position no encontrada')
        }
    })
        

    window.requestAnimationFrame(()=>{
        console.log(scrollposition)
    })
}
ScrollAnimation()

console.log(requestAnimationFrame(ScrollAnimation))