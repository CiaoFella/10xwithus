import { gsap, SplitType } from '../../vendor.js'
import lenis from '../../utilities/smoothScroll.js'

let ctx

function init() {
  const modal = document.querySelector('[data-modal-element=modal]')
  const modalBg = modal?.querySelector('[data-modal-element=bg]')
  const drawer = document.querySelector('[data-drawer-element=drawer]')
  const triggers = document.querySelectorAll('[data-drawer-trigger]')
  const closeBtn = drawer?.querySelector('[data-drawer-element=close]')
  const overlay = drawer?.querySelector('[data-drawer-element=overlay]')
  const drawerItems = drawer?.querySelectorAll('[data-drawer-item]')
  const ctas = drawer?.querySelectorAll('[data-drawer-element=cta]')
  const headlines = drawer?.querySelectorAll('[data-drawer-element=headline]')
  const texts = drawer?.querySelectorAll('[data-drawer-element=text]')
  const richTexts = drawer?.querySelectorAll('[data-drawer-element=rich-text]')
  let richTextsChildren = []
  richTexts.forEach(richText => {
    richTextsChildren.push(richText.children)
  })

  const headlineSplits = new SplitType(headlines, { types: 'lines' })
  const textSplits = new SplitType(texts, { types: 'lines' })

  if (drawer && modal && triggers) {
    ctx = gsap.context(() => {
      const modalTl = gsap.timeline({
        paused: true,
        defaults: { duration: 0.6, ease: 'expo.out' },
      })

      const drawerTl = gsap.timeline({
        paused: true,
        defaults: { duration: 1, ease: 'expo.inOut' },
      })

      gsap.set(modal, { display: 'none', opacity: 0 })
      gsap.set(modalBg, { opacity: 0 })
      gsap.set(drawer, { xPercent: 100, visibility: 'visible' })
      gsap.set(overlay, { opacity: 0 })
      gsap.set(drawerItems, { display: 'none' })

      modalTl.set(modal, { display: 'block' }).to(modal, { opacity: 1 }).to(modalBg, { opacity: 1, duration: 0.3 }, '<')

      drawerTl.to(drawer, { xPercent: 0 }).to(overlay, { opacity: 1, duration: 0.3 }, '<')

      triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
          const triggerType = trigger.getAttribute('data-drawer-trigger')

          drawerTl.pause().progress(0)
          modalTl.pause().progress(0)

          gsap.set(drawerItems, { display: 'none' })

          drawerItems.forEach(item => {
            if (item.getAttribute('data-drawer-item') === triggerType) {
              gsap.set(item, { display: 'flex' })
            }
          })

          modalTl.timeScale(1).play()

          setTimeout(() => {
            headlineSplits.revert()
            textSplits.revert()

            const newHeadlineSplits = new SplitType(headlines, { types: 'lines' })
            const newTextSplits = new SplitType(texts, { types: 'lines' })
            const newRichTextsChildren = new SplitType(richTextsChildren, { types: 'lines' })

            gsap.killTweensOf([newHeadlineSplits.lines, newTextSplits.lines, newRichTextsChildren.lines, ctas])

            gsap.set(newHeadlineSplits.lines, { yPercent: 225 })
            gsap.set([newTextSplits.lines, newRichTextsChildren.lines], { opacity: 0, y: '2.5rem' })
            gsap.set(richTextsChildren, { opacity: 0, y: '2.5rem' })
            gsap.set(ctas, { opacity: 0, y: '1rem' })
            gsap.set(texts, { paddingLeft: 0 })

            drawerTl.clear()
            drawerTl
              .to(drawer, { xPercent: 0 })
              .to(overlay, { opacity: 1, duration: 0.3 }, '<')
              .to(newHeadlineSplits.lines, { yPercent: 0, stagger: 0.1, ease: 'expo.out', duration: 1 }, '<+0.25')
              .to(newTextSplits.lines, { opacity: 1, y: 0, stagger: 0.025, ease: 'expo.out', duration: 1, delay: 0.25 }, '<+0.05')
              .to(newRichTextsChildren.lines, { opacity: 1, y: 0, stagger: 0.01, ease: 'expo.out', duration: 1 }, '<')
              .to(richTextsChildren, { opacity: 1, y: 0, stagger: 0.1, ease: 'expo.out', duration: 1 }, '<')
              .to(ctas, { opacity: 1, y: 0, ease: 'expo.out', duration: 1 }, '<+0.5')

            drawerTl.play()
          }, 100)

          lenis.stop()
        })
      })

      const closeAnimations = () => {
        drawerTl.reverse()
        setTimeout(() => {
          modalTl.timeScale(2).reverse()
        }, 1500)
        lenis.start()
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', closeAnimations)
      }

      if (overlay) {
        overlay.addEventListener('click', closeAnimations)
      }

      if (modalBg) {
        modalBg.addEventListener('click', closeAnimations)
      }

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && (modalTl.progress() > 0 || drawerTl.progress() > 0)) {
          closeAnimations()
        }
      })
    })
  }
}

function cleanup() {
  if (ctx) {
    ctx.revert()
  }
}

export default {
  init,
  cleanup,
}
