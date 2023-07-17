import * as THREE from 'three';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x000040 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Handle mouse movement
const containerElement = document.getElementById('container');
containerElement.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
  // Normalize mouse coordinates to range [-1, 1]
  const mouseX = ((event.clientX / window.innerWidth) * 2 - 1) * 5;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  // Update cube position based on mouse movement
  cube.position.x = mouseX;
  cube.position.y = mouseY;
}

// Render the scene
containerElement.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();