import { sizes, camera } from './camera'
import { WebGLRenderer, PCFSoftShadowMap } from 'three'

// Renderer
const canvas: HTMLElement = document.querySelector('#experience') as HTMLElement

export const renderer = new WebGLRenderer({ canvas })

renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFSoftShadowMap
//renderer.physicallyCorrectLights = true;

export function updateRenderer() {
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}
