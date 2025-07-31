"use strict"
import * as THREE from 'three';

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import { elements } from "./app.js";

let model;

const holograma = new GLTFLoader();
holograma.load('/public/img/hologramamicrophone.glb', (gltf)=>{
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

    // Parte 3: Mostrar micrófono en aboutUs hacia la derecha
    else if (scrollY >= aboutUsTop - window.innerHeight * 0.5) {
        model.visible = true;
        /* model.position.set(3.0, 0, 0); */ // mueve a la derecha
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

/* export let helements = {
    modelo:holograma
}
 */


window.addEventListener('scroll', () => {
  const myCanvas = document.querySelector('.myCanvas');
  const header = document.querySelector('#header');
  const aboutUs = document.querySelector('#aboutUs');

  const headerRect = header.getBoundingClientRect();
  const aboutUsRect = aboutUs.getBoundingClientRect();
  const centroVentana = window.innerHeight / 2;

  // Detectar si el header está visible en pantalla
  const headerVisible = headerRect.top < window.innerHeight && headerRect.bottom > 0;

  // Detectar si el centro de la pantalla está dentro de aboutUs
  const centroEnAboutUs = aboutUsRect.top < centroVentana && aboutUsRect.bottom > centroVentana;

  // Mostrar canvas solo si está en header o en aboutUs
  if (headerVisible || centroEnAboutUs) {
    myCanvas.classList.remove('MycanvasOp');
  } else {
    myCanvas.classList.add('MycanvasOp');
  }

  // Cambiar tamaño del canvas solo si el centro está en aboutUs
  if (centroEnAboutUs) {
    myCanvas.classList.add('MycanvasAbout');
  } else {
    myCanvas.classList.remove('MycanvasAbout');
  }
});







 // Centrar el modelo automáticamente
   /*  const box = new THREE.Box3().setFromObject(model);

    const center = box.getCenter(new THREE.Vector3());

    model.position.set(center); // Lo mueve para que su centro esté en (0, 0, 0)
    
     model.position.y += -0.6;  // Opcional: bajarlo un poco
     model.position.z += 0.2;   // Opcional: moverlo ligeramente hacia el frente


    const axesHelper = new THREE.AxesHelper(2);
    
    elements.scene.add(axesHelper);

    console.log(axesHelper) */