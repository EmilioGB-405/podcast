"use strict"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import {element} from "./scene.js";


const holograma = new GLTFLoader()

holograma.load("/img/hologramaface.glb",(gltf)=>{
    const model = gltf.scene;
    element.scene.add(model);
    model.scale.set(5,5,5)
    model.rotation.y=Math.PI 
    
    const animate =()=>{
        requestAnimationFrame(animate)
        model.rotation.y += 0.01;
        element.renderer.render(element.scene,element.camara)
    };
    animate();
}, undefined,(error)=>{
        console.error("Error al cargar modelo", error) 
    
});

export{holograma};