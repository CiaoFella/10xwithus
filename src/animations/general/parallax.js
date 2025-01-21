import { gsap } from '../../vendor.js'

let ctx

function init() {
  function parallax() {
    const sections = document.querySelectorAll('[anm-scroll-parallax=section]')

    if (sections && sections.length > 0) {
      sections.forEach(section => {
        if (handleAnimationDisable(section)) {
          return
        }

        const parallaxWrap = section.querySelectorAll('[anm-scroll-parallax=wrap]')

        parallaxWrap.forEach((wrap, index) => {
          const element = wrap.querySelector('[anm-scroll-parallax=element]')
          const scaleAttribute = element.getAttribute('anm-scale') || 1.2
          const yAttribute = element.getAttribute('anm-y') || 10
          const scrubAttribute = element.getAttribute('anm-scrub') || 0.5

          const tl = gsap.timeline({
            defaults: { duration: 1, ease: 'linear' },
          })

          tl.set(element, { scale: scaleAttribute })

          tl.fromTo(element, { yPercent: -yAttribute }, { yPercent: yAttribute, ease: 'none' }, '0')

          ScrollTrigger.create({
            animation: tl,
            trigger: wrap,
            scrub: scrubAttribute,
          })
        })
      })
    }

    function handleAnimationDisable(element) {
      const disableAttribute = element.getAttribute('anm-disable')
      if (!disableAttribute) return false

      const viewports = disableAttribute.split(',').map(v => v.trim())

      const mediaQueries = {
        desktop: '(min-width: 992px)',
        tablet: '(min-width: 768px) and (max-width: 991px)',
        landscape: '(orientation: landscape) and (max-width: 767px)',
        mobile: '(max-width: 479px)',
      }

      const disableQueries = viewports.map(viewport => mediaQueries[viewport]).filter(Boolean)

      if (disableQueries.length === 0) return false

      let isDisabled = false
      isDisabled = disableQueries.some(query => window.matchMedia(query).matches)

      return isDisabled
    }
  }

  parallax()
}

function cleanup() {
  ctx && ctx.revert()
}

export default {
  init,
  cleanup,
}
