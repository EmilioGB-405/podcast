"use strict"


import * as THREE from 'three';



const scene = new THREE.Scene();

/* console.log(scene) */






const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camara.position.set(0, 0, 3); // mira directo al centro
camara.lookAt(0, 0, 0);

const header = document.querySelector("header");
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('.myCanvas'), alpha: true, antialias: true});
renderer.setSize(header.offsetWidth, header.offsetHeight);

/* document.body.appendChild(renderer.domElement) */

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2,2,5);
scene.add(light);

scene.background = new THREE.Color('#010206');

window.addEventListener('resize', () => {
    camara.aspect = header.offsetWidth / header.offsetHeight;
    camara.updateProjectionMatrix();
    renderer.setSize(header.offsetWidth, header.offsetHeight);
});





export let elements = {
    camara:camara, 
    scene:scene,
    renderer:renderer
   
};