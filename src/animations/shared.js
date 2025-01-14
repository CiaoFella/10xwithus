import footer from './general/footer.js'
import hero from './shared/hero.js'
import drawer from './general/drawer.js'
import copyClipboard from './shared/copyClipboard.js'

function init() {
  hero.init()
  footer.init()
  drawer.init()
  copyClipboard.init()
}

function cleanup() {
  hero.cleanup()
  footer.cleanup()
  drawer.cleanup()
  copyClipboard.cleanup()
}

export default {
  init,
  cleanup,
}
