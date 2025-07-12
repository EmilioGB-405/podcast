"use strict"
import * as THREE from 'three';

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import { elements } from "./app.js";

let model;

const holograma = new GLTFLoader();
holograma.load('/img/hologramamicrophone02.glb', (gltf)=>{
    model = gltf.scene;
    elements.scene.add(model);
    
    model.position.set(0, -1.5, 0);
// o prueba -2, -2.5, etc.


 window.addEventListener('scroll', () => {
    if (!model) return;

    const header = document.querySelector("header");
    const aboutUs = document.querySelector("#aboutUs");

    const scrollY = window.scrollY;
    const headerHeight = header.offsetHeight;
    const aboutUsTop = aboutUs.getBoundingClientRect().top + window.scrollY;

    // Parte 1: Scroll dentro del header (sube el micrófono)
    if (scrollY <= headerHeight) {
        const percent = scrollY / headerHeight;
        model.position.set(0, -1.5 + percent * 1.5, 0);
        model.visible = true;
    }

    // Parte 2: Ocultar micrófono entre header y aboutUs
    else if (scrollY > headerHeight && scrollY < aboutUsTop - window.innerHeight * 0.5) {
        model.visible = false;
    }

    // Parte 3: Mostrar micrófono en aboutUs hacia la derecha
    else if (scrollY >= aboutUsTop - window.innerHeight * 0.5) {
        model.visible = true;
        model.position.set(1.5, 0, 0); // mueve a la derecha
    }

    // Rotación continua opcional
    model.rotation.y += 0.01;
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



 // Centrar el modelo automáticamente
   /*  const box = new THREE.Box3().setFromObject(model);

    const center = box.getCenter(new THREE.Vector3());

    model.position.set(center); // Lo mueve para que su centro esté en (0, 0, 0)
    
     model.position.y += -0.6;  // Opcional: bajarlo un poco
     model.position.z += 0.2;   // Opcional: moverlo ligeramente hacia el frente


    const axesHelper = new THREE.AxesHelper(2);
    
    elements.scene.add(axesHelper);

    console.log(axesHelper) */