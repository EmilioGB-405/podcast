"use strict"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import {scene,camara,renderer} from "./app";

const BODY_ELEMENT = document.querySelector('body');
const GETCHILDREN = BODY_ELEMENT.children
let scrollPosition = BODY_ELEMENT.scrollTop

console.log(GETCHILDREN);
console.log(BODY_ELEMENT);

function scrollAnimation(){
    BODY_ELEMENT.addEventListener('scroll', ()=>{
        GETCHILDREN.forEach(scrollPosition => {
           if(scrollPosition === 1){
            console.log('position 1')
           }
        });
    })
    window.requestAnimationFrame(()=>{
        console.log(scrollPosition)
    })
}
scrollAnimation()


/* for(let i = 1; i < GETCHILDREN.length; i+=2){
    const CHILD = GETCHILDREN[i]
    console.log(CHILD);

} */


const holograma = new GLTFLoader();
holograma.load('/img/hologramamicrophone.glb', (gltf)=>{
    const model = gltf.scene;
    scene.add(model);

    model.scale.set(4.5,4.5,4.5);
    model.rotation.y = Math.PI;

       const animate = () =>{
        requestAnimationFrame(animate)
        model.rotation.y += 0.01;
        renderer.render(scene, camara)
    };
    animate();

}, undefined, (error) => {
    console.error('Error al cargar el modelo', error)

});

export{holograma};