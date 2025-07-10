"use strict"
import * as THREE from 'three';

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import { elements } from "./app.js";

const holograma = new GLTFLoader();
holograma.load('/img/hologramamicrophone02.glb', (gltf)=>{
    const model = gltf.scene;
    elements.scene.add(model);
    // Centrar el modelo automáticamente
   /*  const box = new THREE.Box3().setFromObject(model);

    const center = box.getCenter(new THREE.Vector3());

    model.position.set(center); // Lo mueve para que su centro esté en (0, 0, 0)
    
     model.position.y += -0.6;  // Opcional: bajarlo un poco
     model.position.z += 0.2;   // Opcional: moverlo ligeramente hacia el frente


    const axesHelper = new THREE.AxesHelper(2);
    
    elements.scene.add(axesHelper);

    console.log(axesHelper) */

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollY / scrollHeight;

        // Ejemplo de animación basada en scroll
        model.rotation.y = Math.PI + scrollPercent * Math.PI * 4;  // gira más con scroll
        model.position.y = scrollPercent * -5;  // sube ligeramente
    });
    
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

export let helements = {
    modelo:holograma
}