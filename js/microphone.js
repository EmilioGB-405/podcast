"use strict"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import { elements } from "./app.js";

const holograma = new GLTFLoader();
holograma.load('/img/hologramamicrophone.glb', (gltf)=>{
    const model = gltf.scene;
    elements.scene.add(model);

    model.scale.set(4.5,4.5,4.5);
    model.rotation.y = Math.PI;

       const animate = () =>{
        requestAnimationFrame(animate)
        model.rotation.y += 0.01;
        elements.renderer.render(elements.scene,elements.camara)
    };
    animate();

}, undefined, (error) => {
    console.error('Error al cargar el modelo', error)

});

/* export{holograma}; */