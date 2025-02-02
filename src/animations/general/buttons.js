import { gsap } from '../../vendor.js'

let ctx

function init() {
  const buttons = document.querySelectorAll('[anm-btn-type]')
  buttons.forEach(button => {
    const type = button.getAttribute('anm-btn-type')
    const iconWrap = button.querySelector('[anm-btn=icon-wrap]')
    const icon = button.querySelector('.g_svg')

    ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' }, paused: true })

      switch (type) {
        case 'plus':
          tl.to(icon, { rotate: 180 })
          break
        case 'arrow':
          const arrowClone = icon.cloneNode(true)
          const isRTL = document.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl'

          // For RTL, position the clone on the right side instead of left
          gsap.set(arrowClone, {
            position: 'absolute',
            bottom: '-125%',
            [isRTL ? 'right' : 'left']: '-125%',
          })
          iconWrap.appendChild(arrowClone)

          // For RTL, move towards top-left (-x) instead of top-right (+x)
          tl.to([icon, arrowClone], {
            yPercent: -125,
            xPercent: isRTL ? -125 : 125,
          })
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
