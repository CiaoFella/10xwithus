import { gsap } from '../../vendor.js'

let ctx

function init() {
  const languageToggles = document.querySelectorAll('[anm-toggle=language-wrap]')

  languageToggles.forEach(toggle => {
    const languageToggle = toggle.querySelector('[anm-toggle=language]')
    const enText = toggle.querySelector('[anm-toggle=en-text]')
    const arText = toggle.querySelector('[anm-toggle=ar-text]')
    const toggleDot = toggle.querySelector('.btn-toggle__toggle-dot')

    if (!languageToggle || !enText || !arText || !toggleDot) return

    const isArabic = window.location.pathname.includes('/ar')
    gsap.set(enText, { opacity: isArabic ? 0.5 : 1 })
    gsap.set(arText, { opacity: isArabic ? 1 : 0.5 })
    gsap.set(toggleDot, { x: isArabic ? '0.75em' : 0 })

    // Set initial checked state
    languageToggle.checked = isArabic

    ctx = gsap.context(() => {
      languageToggle.addEventListener('click', () => {
        const currentPath = window.location.pathname
        const isCurrentlyArabic = currentPath.includes('/ar')

        // Update checked state immediately
        languageToggle.checked = !isCurrentlyArabic

        // Determine new path
        let newPath
        if (isCurrentlyArabic) {
          newPath = currentPath.replace(/^\/ar/, '')
          newPath = newPath || '/'
        } else {
          newPath = '/ar' + (currentPath === '/' ? '' : currentPath)
        }

        // Animate toggle dot
        gsap.to(toggleDot, {
          x: isCurrentlyArabic ? 0 : '0.75em',
          duration: 0.4,
          ease: 'back.out(1.5)',
          rotate: 0.001,
          onComplete: () => {
            setTimeout(() => {
              window.location.href = newPath
            }, 100)
          },
        })

        gsap.to(enText, {
          opacity: isCurrentlyArabic ? 1 : 0.5,
          duration: 0.3,
          ease: 'power2.inOut',
        })

        gsap.to(arText, {
          opacity: isCurrentlyArabic ? 0.5 : 1,
          duration: 0.3,
          ease: 'power2.inOut',
        })
      })
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
