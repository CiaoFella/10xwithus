import { gsap, ScrollTrigger, Flip } from '../../vendor.js'

let ctx

function init() {
  //   const section = document.querySelector('[data-logo-flip=section]')
  //   const original = document.querySelector('[data-logo-flip=original]')
  //   const targetWrap = document.querySelector('[data-logo-flip=target-wrap]')
  //   const target = document.querySelector('[data-logo-flip=target]')
  //   if (!original || !target) return
  //   const state = Flip.getState(original)
  //   // Create ScrollTrigger animation
  //   ctx = gsap.context(() => {
  //     Flip.from(state, {
  //       scale: true,
  //       absolute: true,
  //       simple: true,
  //       scrollTrigger: {
  //         trigger: section,
  //         start: 'top top',
  //         end: 'bottom bottom',
  //         scrub: true,
  //         markers: true,
  //       },
  //     })
  //   })
}

function cleanup() {
  ctx && ctx.revert()
}

export default {
  init,
  cleanup,
}
