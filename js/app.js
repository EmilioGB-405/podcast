"use strict"


import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const scene = new THREE.Scene();

console.log(scene)

const camara = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 0.1, 1000 );
camara.position.z =3;

const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas')});
renderer.setSize(window.innerWidth, window.innerHeight);
/* document.body.appendChild(renderer.domElement) */


const loader = new GLTFLoader();
loader.load('/img/hologramamicrophone.glb', (gltf)=>{
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

 

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2,2,5);
scene.add(light);

scene.background = new THREE.Color('#010206');

window.addEventListener('resize', ()=>{
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
