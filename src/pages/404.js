import animateIcons from '../animations/general/animateIcons.js'
import loopingIcons from '../animations/general/loopingIcons.js'
import numberCarousel404 from '../animations/general/numberCarousel404.js'
import switchImages from '../animations/general/switchImages.js'

function init() {
  loopingIcons.init()
  switchImages.init()
  animateIcons.init()
  numberCarousel404.init()
}

function cleanup() {
  loopingIcons.cleanup()
  switchImages.cleanup()
  animateIcons.cleanup()
  numberCarousel404.cleanup()
}

export default {
  init,
  cleanup,
}
