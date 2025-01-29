import { gsap, ScrollTrigger } from '../../vendor.js'

let backgroundCtx, navbarCtx, transparencyCtx

function init() {
  const nav = document.querySelector('[anm-nav=wrap]')
  const trigger = document.querySelector('[anm-nav=scroll-trigger]')
  const transparentTrigger = document.querySelector('[anm-nav=transparent-trigger]')
  if (!nav) return

  // Initial animation to show navbar
  gsap.fromTo(nav, { yPercent: -100 }, { yPercent: 0, duration: 0.5, ease: 'power3.out' })

  const bodyBackgroundColor = 'var(--theme--background)'

  const backgroundTl = gsap.timeline({
    defaults: { duration: 0.5, ease: 'power1.inOut' },
    paused: true,
  })

  const navbarTl = gsap.timeline({
    defaults: { duration: 0.5, ease: 'power3.inOut' },
    paused: true,
  })

  const positionTl = gsap.timeline({
    defaults: { duration: 0.5, ease: 'power3.inOut' },
    paused: true,
  })

  const transparencyTl = gsap.timeline({
    defaults: { duration: 0.3, ease: 'power2.inOut' },
    paused: true,
  })

  backgroundTl.to(nav, {
    backgroundColor: bodyBackgroundColor,
  })

  navbarTl.fromTo(nav, { yPercent: -100 }, { yPercent: 0 })

  positionTl.to(nav, { yPercent: -100 }).to(nav, { position: 'fixed', top: 0 })

  transparencyTl.to(nav, {
    onStart: () => nav.classList.add('is--transparent'),
    onReverseComplete: () => nav.classList.remove('is--transparent'),
  })

  backgroundCtx = ScrollTrigger.create({
    trigger: trigger,
    start: 'bottom top',
    onUpdate: self => {
      if (self.direction === -1 && self.progress === 0) {
        backgroundTl.reverse()
        navbarTl.reverse()
      } else if (self.direction === 1 && self.progress > 0) {
        backgroundTl.play()
      }
    },
  })

  navbarCtx = ScrollTrigger.create({
    trigger: trigger,
    start: 'bottom top',
    onUpdate: self => {
      if (self.progress === 0) {
        navbarTl.reverse()
        return
      }

      if (self.direction === -1) {
        navbarTl.reverse()
      } else if (self.direction === 1) {
        navbarTl.play()
      }
    },
  })

  setTimeout(() => {
    transparencyCtx = ScrollTrigger.create({
      trigger: transparentTrigger,
      start: 'top 2.5rem',
      end: 'top 2.5rem',
      markers: true,
      onUpdate: self => {
        if (self.progress === 1) {
          transparencyTl.play()
        } else if (self.progress === 0) {
          transparencyTl.reverse()
        }
      },
    })
  }, 500)

  setTimeout(() => {
    ScrollTrigger.create({
      trigger: nav,
      start: `bottom top`,
      onUpdate: self => {
        if (self.direction === -1 && self.progress === 0) {
          positionTl.timeScale(1.5).reverse()
        } else if (self.direction === 1 && self.progress > 0) {
          positionTl.timeScale(1).play()
        }
      },
    })
  }, 500)
}

function cleanup() {
  backgroundCtx && backgroundCtx.revert()
  navbarCtx && navbarCtx.revert()
  transparencyCtx && transparencyCtx.revert()
}

export default {
  init,
  cleanup,
}
