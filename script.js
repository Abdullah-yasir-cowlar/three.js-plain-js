var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  renderer.setSize(500, 500);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

var material = new THREE.MeshLambertMaterial({ color: "white" });

const boxes = [
  { x: -10, y: 2, z: -30, size: [5, 5, 5] },
  { x: 20, y: 8, z: -40, size: [5, 5, 5] },
  { x: 30, y: 12, z: -50, size: [5, 5, 5] },
  { x: 40, y: 14, z: -60, size: [5, 5, 5] },
];

boxes.forEach((box, i) => {
  var geometry = new THREE.BoxGeometry(...box.size);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = box.x;
  mesh.position.y = box.y;
  mesh.position.z = box.z;
  scene.add(mesh);
});

var light = new THREE.PointLight("white", 2, 1000);
light.position.set(0, 0, 25);
scene.add(light);

var render = function () {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
};

render();
