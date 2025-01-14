import animateIcons from '../animations/general/animateIcons.js'
import marquee from '../animations/general/marquee.js'
import switchImages from '../animations/general/switchImages.js'
import shared from '../animations/shared.js'

function init() {
  shared.init()
  marquee.init()
  switchImages.init()
  animateIcons.init()
}

function cleanup() {
  shared.cleanup()
  marquee.cleanup()
  switchImages.cleanup()
  animateIcons.cleanup()
}

export default {
  init,
  cleanup,
}
