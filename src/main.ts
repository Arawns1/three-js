import * as THREE from 'three'
import './core/orbit-controls'
import './style.css'
import { gui, fpsGraph } from './core/gui'
import { camera } from './core/camera'
import { renderer, updateRenderer } from './core/renderer'

const scene = new THREE.Scene()
//Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(0.25, 2, 2.25)
scene.add(directionalLight)

// Model
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshToonMaterial({
    color: new THREE.Color('#59dcae'),
    wireframe: false,
  })
)

sphere.position.set(0, 2, 0)
sphere.castShadow = true

const sphereCtrls = gui.addFolder({
  title: 'Sphere',
})
sphereCtrls.addBinding(sphere.position, 'x', {
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addBinding(sphere.position, 'y', {
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls.addBinding(sphere.position, 'z', {
  min: -10,
  max: 10,
  step: 0.1,
})

sphereCtrls.addBinding(sphere.material, 'wireframe')

scene.add(sphere)

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10, 10, 10),
  new THREE.MeshToonMaterial({
    color: new THREE.Color('#444'),
  })
)

plane.rotation.set(-Math.PI / 2, 0, 0)
plane.receiveShadow = true
scene.add(plane)

scene.add(camera)
updateRenderer()

const loop = () => {
  fpsGraph.begin()
  renderer.render(scene, camera)
  sphere.rotation.x += 0.001
  sphere.rotation.y += 0.001
  sphere.rotation.z += 0.001
  fpsGraph.end()
  requestAnimationFrame(loop)
}
loop()
