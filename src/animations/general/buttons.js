import { gsap } from '../../vendor.js'

let ctx

function init() {
  const buttons = document.querySelectorAll('[anm-btn-type]')
  console.log(buttons)
  buttons.forEach(button => {
    const type = button.getAttribute('anm-btn-type')
    const icon = button.querySelector('.g_svg')

    ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.inOut' }, paused: true })

      switch (type) {
        case 'plus':
          tl.to(icon, { rotate: 180 })
          break
      }

      button.addEventListener('mouseenter', () => {
        tl.restart()
      })

      button.addEventListener('mouseleave', () => {
        tl.reverse()
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
