import { gsap, ScrollTrigger } from './vendor.js'
import barba from './barba.js'
import menu from './animations/general/menu.js'
import pageLoader from './animations/general/pageLoader.js'
import { getCurrentPage, handleResponsiveElements, updateCurrentNavLink } from './utilities/helper.js'
import createSplitTypes from './utilities/createSplitTypes.js'
import locomotiveScroll from './utilities/smoothScroll.js'
import handlePageEnterAnimation from './animations/general/handlePageEnter.js'
import { cursor, magneticCursor } from './utilities/customCursor/customCursor.js'
import { isDesktop } from './utilities/variables.js'

gsap.registerPlugin(ScrollTrigger)
menu.init()

const mm = gsap.matchMedia()

let currentAnimationModule = null

function cleanupCurrentModule() {
  if (currentAnimationModule && currentAnimationModule.cleanup) {
    currentAnimationModule.cleanup()
  }

  // Clean up any lingering ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())

  // Reset the current animation module reference
  currentAnimationModule = null
}
function getBaseUrl() {
  const script = document.querySelector('script[src*="main.js"]')
  const scriptSrc = script?.src || ''
  const baseUrl = scriptSrc.substring(0, scriptSrc.lastIndexOf('/') + 1)
  return baseUrl
}

function loadPageModule(pageName) {
  const baseUrl = getBaseUrl()
  import(/* webpackIgnore: true */ `${baseUrl}pages/${pageName}.js`)
    .then(module => {
      currentAnimationModule = module.default || {}
      // console.log(`${baseUrl}pages/${pageName}.js`)
      if (typeof currentAnimationModule.init === 'function') {
        currentAnimationModule.init()
      } else {
        console.warn(`Module for page ${pageName} does not have an init function.`)
      }
    })
    .catch(err => {
      console.error(`Failed to load module for page: ${pageName}`, err)
      currentAnimationModule = {} // Set to an empty object to avoid further errors
    })
}

// Load the initial page module
const initialPageName = document.querySelector('[data-barba="container"]').dataset.barbaNamespace
createSplitTypes.init()
loadPageModule(initialPageName)
pageLoader.init(initialPageName)
handleResponsiveElements()
mm.add(isDesktop, () => {
  cursor.init()
  magneticCursor()
})
async function getCountry() {
  try {
    const response = await fetch('https://ipwhois.app/json/')
    const data = await response.json()
    const country = data.country_code
    const excludedCountries = ['AE', 'SA', 'QA', 'EG']

    if (!excludedCountries.includes(country)) {
      document.querySelector('#cookie-component').style.display = 'block'
    } else {
      document.querySelector('#cookie-component').style.display = 'none'
    }
  } catch (error) {
    document.querySelector('#cookie-component').style.display = 'block'
  }
}
getCountry()

document.addEventListener('onPageReady', event => {
  if (event.detail === true) {
    handlePageEnterAnimation(getCurrentPage()).play()
  }
})

barba.hooks.beforeEnter(() => {
  createSplitTypes.cleanup()
})

barba.hooks.afterEnter(() => {
  cleanupCurrentModule()
})

barba.hooks.after(data => {
  const pageName = data.next.namespace
  createSplitTypes.init()
  updateCurrentNavLink()
  loadPageModule(pageName)
  handleResponsiveElements()
})
