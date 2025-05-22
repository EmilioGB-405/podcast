"use strict"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import {scene,camara,renderer} from "./app";

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

export{holograma}