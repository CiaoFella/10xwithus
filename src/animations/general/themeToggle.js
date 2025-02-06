import { gsap } from '../../vendor.js'

let ctx

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getPreferredTheme() {
  const savedTheme = document.cookie.match(/theme=([^;]+)/)
  return savedTheme ? savedTheme[1] : getSystemTheme()
}

function setTheme(theme, pageWrap) {
  pageWrap.dataset.theme = theme
  document.cookie = `theme=${theme};path=/;max-age=31536000` // Cookie expires in 1 year

  const leftPath = document.querySelector('[anm-toggle=theme-left]')
  const rightPath = document.querySelector('[anm-toggle=theme-right]')

  // Animate fill colors
  gsap.to(leftPath, {
    fill: theme === 'dark' ? 'transparent' : 'currentColor',
    duration: 0.75,
    ease: 'power2.inOut',
  })

  gsap.to(rightPath, {
    fill: theme === 'dark' ? 'currentColor' : 'transparent',
    duration: 0.75,
    ease: 'power2.inOut',
  })
}

function init() {
  const pageWrap = document.querySelector('.page_wrap')
  const themeToggles = document.querySelectorAll('[anm-toggle=theme]')
  if (!pageWrap || !themeToggles) return

  setTheme(getPreferredTheme(), pageWrap)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!document.cookie.includes('theme=')) {
      setTheme(e.matches ? 'dark' : 'light', pageWrap)
    }
  })

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentTheme = pageWrap.dataset.theme
      const newTheme = currentTheme === 'light' ? 'dark' : 'light'
      setTheme(newTheme, pageWrap)
    })
  })
}

function cleanup() {
  ctx && ctx.revert()
}

export default {
  init,
  cleanup,
}
