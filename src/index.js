import * as T from 'three';

// init
const camera = new T.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

const scene = new T.Scene();

const geometry = new T.BoxGeometry(0.2, 0.2, 0.2);
const material = new T.MeshNormalMaterial();

const mesh = new T.Mesh(geometry, material);
scene.add(mesh);

const renderer = new T.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation
function animation(time) {
	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render(scene, camera);
}