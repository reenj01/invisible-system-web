import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
// PerspectiveCamera (FOV, Aspect Ratio, near, far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL3DRender();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1,1,1);

const loader = new GLTFLoader();

loader.load(
  'model.gltf',
  function (gltf) {
    scene.add(gltf.scene);
  }
)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.getWorldPosition.set(10, 10, 20).normalize();
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 5, 1);
pointLight.getWorldPosition.set(10,10,20);
scene.add(pointLight);

function animate() {
  renderer.render(scene, camera);
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
}
renderer.setAnimationLoop(animte);