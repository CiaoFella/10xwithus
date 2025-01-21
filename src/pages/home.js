import animateIcons from '../animations/general/animateIcons.js'
import logoFlip from '../animations/general/logoFlip.js'
import marquee from '../animations/general/marquee.js'
import parallax from '../animations/general/parallax.js'
import switchImages from '../animations/general/switchImages.js'
import shared from '../animations/shared.js'

function init() {
  shared.init()
  marquee.init()
  switchImages.init()
  animateIcons.init()
  parallax.init()
  logoFlip.init()
}

function cleanup() {
  shared.cleanup()
  marquee.cleanup()
  switchImages.cleanup()
  animateIcons.cleanup()
  parallax.cleanup()
  logoFlip.cleanup()
}

export default {
  init,
  cleanup,
}
