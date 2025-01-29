import { fullClipPath, topClipPath } from '../../utilities/variables.js'
import { gsap, ScrollTrigger, SplitType } from '../../vendor.js'

let ctx

function init() {
  const section = document.querySelector('[anm-footer=section]')

  if (section) {
    const target = section.querySelector('[anm-footer=scroll-target]')
    const elements = section.querySelectorAll('[anm-footer=element]')

    ctx = gsap.context(() => {
      const scrubTl = gsap.timeline()
      const enterTl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.out' } })

      ScrollTrigger.create({
        trigger: section,
        animation: scrubTl,
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      })

      ScrollTrigger.create({
        trigger: section,
        animation: enterTl,
        start: 'top bottom',
        end: 'top center',
        toggleActions: 'none play none reset',
      })

      scrubTl.from(target, { yPercent: 25, scale: 0.9, ease: 'linear', duration: 1 })

      enterTl.from(elements, { yPercent: 200, stagger: 0.1 })
    })
  }
}

function cleanup() {
  ctx && ctx.revert()
}

export default {
  init,
  cleanup,
}
