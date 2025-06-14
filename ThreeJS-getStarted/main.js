import * as THREE from 'https://unpkg.com/three@0.160.1/build/three.module.js';

const SCENE = new THREE.Scene();
const CAMERA = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const RENDERER = new THREE.WebGLRenderer();
RENDERER.setSize(window.innerWidth, window.innerHeight);
RENDERER.setAnimationLoop(animate);

document.body.appendChild(RENDERER.domElement);

const GEOMETRY = new THREE.BoxGeometry(1, 1, 1);
const MATERIAL = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const CUBE = new THREE.Mesh(GEOMETRY, MATERIAL);

SCENE.add(CUBE);

CAMERA.position.z = 5;

const animate = () => {
    CUBE.rotation.x += 0.01;
    CUBE.rotation.y += 0.01;

    RENDERER.render(SCENE, CAMERA);
}

