import { gsap } from '../../vendor.js'

let ctx

function init() {
  ctx = gsap.context(() => {
    const allCols = document.querySelectorAll('[anm-404="col"]')

    allCols.forEach((col, index) => {
      // Get both numbers from the column
      const firstNum = col.firstElementChild
      const secondNum = firstNum.nextElementSibling
      const cloneFirst = firstNum.cloneNode(true)
      const cloneSecond = secondNum.cloneNode(true)
      col.appendChild(cloneFirst)
      col.appendChild(cloneSecond)

      // No need to clone, we already have both numbers
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.025,
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
