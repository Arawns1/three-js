import { PerspectiveCamera } from 'three'
//Camera
const VERTICAL_FIELD_OF_VIEW = 75

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

export const camera = new PerspectiveCamera(
  VERTICAL_FIELD_OF_VIEW,
  sizes.width / sizes.height
)

camera.position.set(9, 4, 9)

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
})

export default camera
