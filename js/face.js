"use strict"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import {scene,camara,renderer} from "./app";


const HOLOGRAMAFACE = new GLTFLoader()

HOLOGRAMAFACE.load("/img/hologramamicrophone.glb",(gltf)=>{
    const model = gltf.scene;
    scene.add(model);
    model.scale.set(4.5,4.5,4.5)
    model.rotation.y=Math.PI 
    
    const animate =()=>{
        requestAnimationFrame(animate)
        model.rotation.y += 0.01;
        renderer.render(scene,camara)
    };
    animate();
}, undefined,(error)=>{
        console.error("Error al cargar modelo", error) 
    
});



/* function ScrollAnimation(){
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

console.log(requestAnimationFrame(ScrollAnimation)) */