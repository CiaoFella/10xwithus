import { LocomotiveScroll, ScrollTrigger } from '../vendor.js'
import { isDesktop, isTablet } from './variables.js'

const mm = gsap.matchMedia()

let lerp
let wheelMultiplier
let touchMultiplier

mm.add(isTablet, () => {
  lerp = 0.95
  wheelMultiplier = 0
  touchMultiplier = 0
})

mm.add(isDesktop, () => {
  lerp = 0.5
  wheelMultiplier = 0.7
  touchMultiplier = 0
})

const locomotiveScroll = new LocomotiveScroll({
  lerp: lerp,
  wheelMultiplier: wheelMultiplier,
  touchMultiplier: touchMultiplier,
})

export default locomotiveScroll
