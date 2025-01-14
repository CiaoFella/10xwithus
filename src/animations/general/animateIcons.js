import { gsap } from '../../vendor.js'

let ctx

function init() {
  const wraps = document.querySelectorAll('[anm-hover-icons=wrap]')
  wraps.forEach(wrap => {
    const icons = wrap.querySelectorAll('[anm-hover-icons=icon]')
    const type = wrap.getAttribute('anm-type')

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: 'power2.inOut' },
      paused: true,
    })

    switch (type) {
      case 'pulse':
        tl.fromTo(icons, { scale: 1 }, { scale: 0.8, yoyo: true, repeat: -1 })
        break
    }

    wrap.addEventListener('mouseenter', () => {
      tl.play()
    })
    wrap.addEventListener('mouseleave', () => {
      // Complete current animation and smoothly return to start
      gsap.to(icons, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          tl.pause(0)
        },
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
