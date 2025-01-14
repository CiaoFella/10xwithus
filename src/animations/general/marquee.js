import { gsap, ScrollTrigger } from '../../vendor.js'

let ctx
let animation

function init() {
  const marquee = document.querySelector('[anm-marquee="wrap"]')
  if (!marquee) {
    return
  }
  const duration = parseInt(marquee.getAttribute('duration'), 10) || 5
  const marqueeContent = marquee.querySelector('[anm-marquee="content"]')
  if (!marqueeContent) {
    return
  }

  const marqueeContentClone = marqueeContent.cloneNode(true)
  marquee.append(marqueeContentClone)

  let tween
  let scrollVelocity = 0
  const baseSpeed = duration // Store original duration as base speed

  const playMarquee = () => {
    let progress = tween ? tween.progress() : 0
    tween && tween.progress(0).kill()
    const width = parseInt(getComputedStyle(marqueeContent).getPropertyValue('width'), 10)
    const gap = parseInt(getComputedStyle(marqueeContent).getPropertyValue('column-gap'), 10)
    const distanceToTranslate = -1 * (gap + width)

    tween = gsap.fromTo(
      '[anm-marquee="content"]',
      { x: 0 },
      {
        x: distanceToTranslate,
        duration: baseSpeed,
        ease: 'none',
        repeat: -1,
      }
    )

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: marquee,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: self => {
        // Get scroll velocity and adjust animation speed
        scrollVelocity = Math.abs(self.getVelocity() / 1000)
        const speedFactor = 1 + Math.min(scrollVelocity, 4) // Cap the maximum speed
        tween.timeScale(speedFactor)
      },
    })

    tween.progress(progress)
  }
  playMarquee()

  function debounce(func) {
    var timer
    return function (event) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(
        () => {
          func()
        },
        500,
        event
      )
    }
  }

  window.addEventListener('resize', debounce(playMarquee))
}

function cleanup() {
  ctx && ctx.revert()
}

export default {
  init,
  cleanup,
}
