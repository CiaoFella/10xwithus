import animateIcons from '../animations/general/animateIcons.js'
import loopingIcons from '../animations/general/loopingIcons.js'
import switchImages from '../animations/general/switchImages.js'

function init() {
  loopingIcons.init()
  switchImages.init()
  animateIcons.init()
}

function cleanup() {
  loopingIcons.cleanup()
  switchImages.cleanup()
  animateIcons.cleanup()
}

export default {
  init,
  cleanup,
}
