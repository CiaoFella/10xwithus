import { gsap, SplitType } from '../../vendor.js'
import locomotiveScroll from '../../utilities/smoothScroll.js'
import { fullClipPath, rightClipPath, rightSideClipPath } from '../../utilities/variables.js'

let ctx

function init() {
  const modal = document.querySelector('[data-modal-element=modal]')
  const modalBg = modal?.querySelector('[data-modal-element=bg]')
  const drawer = document.querySelector('[data-drawer-element=drawer]')
  const scrollableContent = drawer.querySelector('[data-lenis-prevent]')
  const triggers = document.querySelectorAll('[data-drawer-trigger]')
  const closeBtn = drawer?.querySelector('[data-drawer-element=close]')
  const drawerItems = drawer?.querySelectorAll('[data-drawer-item]')
  const mainHeadline = drawer?.querySelector('[data-drawer-element=main-headline]')
  const textWrappers = drawer?.querySelectorAll('[data-drawer-element=text-wrap]')

  let textElements = []
  textWrappers?.forEach(wrapper => {
    const headlines = wrapper.querySelectorAll('[data-drawer-element=headline]')
    const texts = wrapper.querySelectorAll('[data-drawer-element=text]')
    const richTexts = wrapper.querySelectorAll('[data-drawer-element=rich-text]')

    const textSplit = new SplitType(texts, { types: 'lines' })

    const richTextChildren = []
    richTexts.forEach(richText => {
      richTextChildren.push(richText.children)
    })

    textElements = [...textElements, ...headlines, ...textSplit.lines, ...richTextChildren]
  })

  const mainHeadlineSplit = new SplitType(mainHeadline, { types: 'lines' })

  if (drawer && modal && triggers) {
    ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { duration: 1, ease: 'expo.inOut', rotate: 0.001 },
      })

      gsap.set(modal, { display: 'none', opacity: 0 })
      gsap.set(modalBg, { opacity: 0 })
      gsap.set(drawer, { xPercent: 25, visibility: 'visible', clipPath: rightSideClipPath })
      gsap.set(drawerItems, { display: 'none' })

      triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
          const triggerType = trigger.getAttribute('data-drawer-trigger')
          const activeDrawerItem = Array.from(drawerItems).find(item => item.getAttribute('data-drawer-item') === triggerType)

          tl.pause().progress(0)

          gsap.set(drawerItems, { display: 'none' })
          gsap.set(activeDrawerItem, { display: 'flex' })

          const activeMainHeadline = activeDrawerItem.querySelector('[data-drawer-element=main-headline]')
          const activeTextWrappers = activeDrawerItem.querySelectorAll('[data-drawer-element=text-wrap]')
          const activeCtas = activeDrawerItem.querySelectorAll('[data-drawer-element=cta]')

          let activeTextElements = []
          activeTextWrappers?.forEach(wrapper => {
            const headlines = wrapper.querySelectorAll('[data-drawer-element=headline]')
            const texts = wrapper.querySelectorAll('[data-drawer-element=text]')
            const richTexts = wrapper.querySelectorAll('[data-drawer-element=rich-text]')

            const textSplit = new SplitType(texts, { types: 'lines' })

            const richTextChildren = []
            richTexts.forEach(richText => {
              richTextChildren.push(richText.children)
            })

            activeTextElements = [...activeTextElements, ...headlines, ...textSplit.lines, ...richTextChildren]
          })

          const activeMainHeadlineSplit = new SplitType(activeMainHeadline, { types: 'lines' })

          gsap.killTweensOf([activeMainHeadlineSplit.lines, activeTextElements, activeCtas])

          gsap.set(activeMainHeadlineSplit.lines, { yPercent: 225 })
          gsap.set(activeTextElements, { opacity: 0, y: '2.5rem' })
          gsap.set(activeCtas, { opacity: 0, y: '1rem' })

          tl.clear()
            .set(modal, { display: 'block' })
            .to(modal, { opacity: 1, duration: 0.6 })
            .call(() => scrollableContent.scroll({ top: 0, behavior: 'smooth', duration: 0.5 }, [], '<'))
            .to(modalBg, { opacity: 1, duration: 0.3 }, 0)
            .to(drawer, { xPercent: 0, clipPath: fullClipPath, duration: 1.5 }, 0)
            .to(activeMainHeadlineSplit.lines, { yPercent: 0, stagger: 0.05, ease: 'expo.out', duration: 1 }, '<+0.75')
            .to(activeTextElements, { opacity: 1, y: 0, stagger: 0.025, ease: 'expo.out', duration: 1 }, '<+0.25')
            .to(activeCtas, { opacity: 1, y: 0, ease: 'expo.out', duration: 1 }, '<+0.5')

          tl.timeScale(1).play()

          locomotiveScroll.stop()
        })
      })

      const closeAnimations = () => {
        tl.timeScale(1.5).reverse()
        locomotiveScroll.start()
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', closeAnimations)
      }

      if (modalBg) {
        modalBg.addEventListener('click', closeAnimations)
      }

      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && tl.progress() > 0) {
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
