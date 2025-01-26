import { LocomotiveScroll } from '../vendor.js'

const locomotiveScroll = new LocomotiveScroll({
  wrapper: window,
  content: document.documentElement,
  lerp: 0.1,
  duration: 1.2,
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  normalizeWheel: true,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

export default locomotiveScroll
