import footer from './general/footer.js'
import hero from './shared/hero.js'
import drawer from './general/drawer.js'
import copyClipboard from './shared/copyClipboard.js'
import elementHover from './general/elementHover.js'
import buttons from './general/buttons.js'
import themeToggle from './general/themeToggle.js'
import navScroll from './general/navScroll.js'
import languageToggle from './general/languageToggle.js'
import elementReveal from './general/elementReveal.js'
import loopingWords from './general/loopingWords.js'
import switchImages from './general/switchImages.js'
import textReveal from './general/textReveal.js'

function init() {
  hero.init()
  footer.init()
  drawer.init()
  copyClipboard.init()
  elementHover.init()
  buttons.init()
  themeToggle.init()
  navScroll.init()
  languageToggle.init()
  elementReveal.init()
  loopingWords.init()
  switchImages.init()
  textReveal.init()
}

function cleanup() {
  hero.cleanup()
  footer.cleanup()
  drawer.cleanup()
  copyClipboard.cleanup()
  elementHover.cleanup()
  buttons.cleanup()
  themeToggle.cleanup()
  navScroll.cleanup()
  languageToggle.cleanup()
  elementReveal.cleanup()
  loopingWords.cleanup()
  switchImages.cleanup()
  textReveal.cleanup()
}

export default {
  init,
  cleanup,
}
