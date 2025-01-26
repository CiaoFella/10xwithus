import { gsap } from '../../vendor.js'
import locomotiveScroll from '../../utilities/smoothScroll.js'
import handlePageEnterAnimation from './handlePageEnter.js'

let ctx

const mm = gsap.matchMedia()

function init(namespace) {
  const section = document.querySelector('[data-page-loader=section]')

  if (section) {
    ctx = gsap.context(() => {
      // call page enter animation
      // stop locomotiveScroll scroll
      // hide page loader
    })
  }
}

function cleanup() {
  if (ctx) {
    ctx.revert()
  }
}

export default {
  init,
  cleanup,
}
