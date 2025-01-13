import footer from './general/footer.js'
import hero from './shared/hero.js'
import drawer from './general/drawer.js'

function init() {
  hero.init()
  footer.init()
  drawer.init()
}

function cleanup() {
  hero.cleanup()
  footer.cleanup()
  drawer.cleanup()
}

export default {
  init,
  cleanup,
}
