import { bottomClipPath, fullClipPath, isLandscape, isTablet, topClipPath } from '../../utilities/variables.js'
import { gsap } from '../../vendor.js'

const mm = gsap.matchMedia()

let ctx

export default function handlePageEnterAnimation(currentPage) {
  const nav = document.querySelector('[anm-nav=inner]')
  const textLines = document.querySelectorAll('[anm-hero=text] .line')
  const logoParts = document.querySelector('[anm-hero=logo]').children
  const imgs = document.querySelector('[anm-hero=imgs]')
  const rollerText = document.querySelectorAll('[anm-hero=roller-text]')

  let tl
  const logoFirstChild = logoParts[1]
  const logoRemainingChildren = [...logoParts].slice(2)

  ctx = gsap.context(() => {
    tl = gsap.timeline({ defaults: { duration: 1.5, ease: 'expo.out' } })
    tl.to(logoFirstChild, { yPercent: -110 }, 0)
      .to(imgs, { y: '0' }, '<+0.1')
      .to(logoRemainingChildren, { yPercent: -110, stagger: 0.1 }, '<+0.1')
      .to(textLines, { clipPath: fullClipPath, y: 0, stagger: 0.1 }, '<+25%')
      .to(nav.children, { y: 0, stagger: 0.25 }, '<+0.25')

    mm.add(isTablet, () => {
      tl.to(rollerText, { y: 0, stagger: 0.1 }, '<-0.25')
    })
  })

  return tl
}
