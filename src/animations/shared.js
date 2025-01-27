import footer from './general/footer.js'
import hero from './shared/hero.js'
import drawer from './general/drawer.js'
import copyClipboard from './shared/copyClipboard.js'
import elementHover from './general/elementHover.js'
import buttons from './general/buttons.js'
import preloader from './general/preloader.js'

function init() {
  preloader.init()
  hero.init()
  footer.init()
  drawer.init()
  copyClipboard.init()
  elementHover.init()
  buttons.init()
}

function cleanup() {
  preloader.cleanup()
  hero.cleanup()
  footer.cleanup()
  drawer.cleanup()
  copyClipboard.cleanup()
  elementHover.cleanup()
  buttons.cleanup()
}

export default {
  init,
  cleanup,
}
