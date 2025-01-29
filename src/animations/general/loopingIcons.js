import { gsap } from '../../vendor.js'

let ctx

function init() {
  const loopEls = document.querySelectorAll('[anm-looping-element]')

  if (loopEls.length === 0) return

  ctx = gsap.context(() => {
    loopEls.forEach(el => {
      const attribute = el.getAttribute('anm-looping-element')

      switch (attribute) {
        case 'icons':
          const icons = el.children

          const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, defaults: { ease: 'expo.inOut', duration: 1.5 } })
          tl.to(icons, { rotate: 360 })
          break
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
