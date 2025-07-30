"use strict"

import * as THREE from "three"

const scene = new THREE.Scene;

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camara.position.z = 5;


const header = document.querySelector("header");
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('.myCanvas'), alpha: true, antialias: true});
renderer.setSize(header.offsetWidth, header.offsetHeight);

scene.background = new THREE.Color('#010206');

window.addEventListener('resize', () => {
    camara.aspect = header.offsetWidth / header.offsetHeight;
    camara.updateProjectionMatrix();
    renderer.setSize(header.offsetWidth, header.offsetHeight);
});


export let element = {
    camara:camara,
    renderer:renderer,
    scene:scene
}
