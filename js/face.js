import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { elements } from "./app";

let model;
const loader = new GLTFLoader();
const canvas = document.querySelector('.myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Vectores para animación suave
const targetPosition = new THREE.Vector3();
const currentPosition = new THREE.Vector3();
const targetScale = new THREE.Vector3(6.5, 6.5, 6.5);
const currentScale = new THREE.Vector3(6.5, 6.5, 6.5);

loader.load("/img/hologramaface.glb", (gltf) => {
    model = gltf.scene;
    elements.scene.add(model);
    model.rotation.y = Math.PI;

    // Posición inicial (derecha)
    currentPosition.set(3, 0, 0); 
    model.position.copy(currentPosition);
    model.scale.copy(currentScale);

    const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01;

        updateTargetByScroll();

        // Interpolación suave
        currentPosition.lerp(targetPosition, 0.05); 
        currentScale.lerp(targetScale, 0.05); 

        model.position.copy(currentPosition);
        model.scale.copy(currentScale);

        elements.renderer.render(elements.scene, elements.camara);
    };

    animate();
}, undefined, (error) => {
    console.error("Error al cargar modelo", error);
});

function updateTargetByScroll() {
    const scrollTop = window.scrollY;
    const header = document.querySelector("header");
    const objective = document.querySelector("#Objective");

    const headerBottom = header.offsetTop + header.offsetHeight;
    const objectiveTop = objective.offsetTop;

    if (!model) return;

    // 🎯 Estado 1: En el header → derecha
    if (scrollTop < headerBottom - 50) {
        targetPosition.set(3, 0, 0); // Derecha
        targetScale.set(7.5, 7.5, 7.5);
    }
    // 🎯 Estado 2: Scroll medio → centro
    else if (scrollTop >= headerBottom && scrollTop < objectiveTop - 200) {
        targetPosition.set(0, 0, 0); // Centro
        targetScale.set(7.5, 7.5, 7.5);
    }
    // 🎯 Estado 3: Última sección → centro + grande
    else {
        targetPosition.set(0, 0, 0);
        targetScale.set(7.5, 7.5, 7.5);
    }
}
