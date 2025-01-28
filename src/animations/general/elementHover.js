import { gsap } from '../../vendor.js'

let ctx

function init() {
  const sections = document.querySelectorAll('[anm-hover-element=section]')

  if (!sections.length && sections.length > 1) return

  sections.forEach(section => {
    const visuals = section.querySelectorAll('[anm-hover-element=wrap]')

    if (!visuals.length) return

    visuals.forEach(visual => {
      const inner = visual.querySelector('[anm-hover-element=inner]')
      const iconsWrap = visual.querySelector('[anm-hover-element=icons]')
      const icons = iconsWrap.children
      const otherVisuals = [...visuals].filter(v => v !== visual).map(v => v.querySelector('[anm-hover-element=inner]'))

      gsap.set(iconsWrap, { autoAlpha: 0 })

      let hoverTl

      visual.addEventListener('mouseenter', () => {
        gsap.to(inner, { scale: 1.05, duration: 1, ease: 'expo.inOut' })
        gsap.to(otherVisuals, { scale: 0.95, duration: 1, ease: 'expo.inOut' })
        gsap.to(iconsWrap, { scale: 1.1, autoAlpha: 1, duration: 1, ease: 'expo.inOut' })

        hoverTl = gsap.timeline()
        hoverTl.fromTo(icons, { rotation: 0 }, { rotation: 360, ease: 'expo.inOut', duration: 2, stagger: 0.1, repeat: -1, repeatDelay: 0.5 })
      })

      visual.addEventListener('mouseleave', () => {
        gsap.to(inner, { scale: 1, duration: 1, ease: 'expo.inOut' })
        gsap.to(otherVisuals, { scale: 1, duration: 1, ease: 'expo.inOut' })
        gsap.to(iconsWrap, { scale: 1, autoAlpha: 0, duration: 1, ease: 'expo.inOut' })

        if (hoverTl) {
          hoverTl.kill()
        }
      })
    })
  })
}

function cleanup() {
  ctx && ctx.revert()
}

export default {
  init,
  cleanup,
}
