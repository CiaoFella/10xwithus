import { gsap } from '../../vendor.js'

let ctx

function init() {
  const visuals = document.querySelectorAll('[anm-hover-element=wrap]')

  if (!visuals.length) return

  visuals.forEach(visual => {
    const inner = visual.querySelector('[anm-hover-element=inner]')
    const iconsWrap = visual.querySelector('[anm-hover-element=icons]')
    const icons = iconsWrap.children

    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' }, paused: true })

    tl.to(inner, { scale: 1.05 })
    tl.fromTo(iconsWrap, { scale: 1, autoAlpha: 0 }, { scale: 1.1, autoAlpha: 1 }, '<')

    let hoverTl

    visual.addEventListener('mouseenter', () => {
      tl.play()
      hoverTl = gsap.timeline()
      hoverTl.fromTo(icons, { rotation: 0 }, { rotation: 360, ease: 'expo.inOut', duration: 2, stagger: 0.1, repeat: -1, repeatDelay: 0.5 })
    })

    visual.addEventListener('mouseleave', () => {
      tl.reverse()
      if (hoverTl) {
        hoverTl.kill()
      }
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
