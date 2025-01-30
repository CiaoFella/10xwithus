import { gsap } from '../../vendor.js'

let ctx

function init() {
  ctx = gsap.context(() => {
    const allCols = document.querySelectorAll('[anm-404="col"]')

    allCols.forEach((col, index) => {
      const firstChild = col.firstElementChild
      const copyChild = firstChild.cloneNode(true)
      col.appendChild(copyChild)

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.05,
        delay: index * 0.05,
      })

      tl.to(col, {
        y: '-1.15em',
        duration: 2,
        ease: 'expo.inOut',
        onComplete: () => {
          const firstChild = col.firstElementChild
          col.appendChild(firstChild)
          gsap.set(col, { y: 0 })
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
