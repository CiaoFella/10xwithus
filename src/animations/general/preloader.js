import { gsap } from '../../vendor.js'

let ctx

function init() {
  const wrap = '[anm-loader="wrap"]'
  const preloaderContent = '[anm-loader="preloader-content"]'
  const numberOuter = '[anm-loader="numbers-outer"]'

  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.inOut', duration: 1.5 } })

    // Generate random numbers for the animation
    const randomNumbers1 = gsap.utils.random([2, 3, 4])
    const randomNumbers2 = gsap.utils.random([5, 6, 7])
    const randomNumbers3 = gsap.utils.random([1, 5])
    const randomNumbers4 = gsap.utils.random([7, 8, 9])

    // Calculate the distance between elements
    const preloaderEl = document.querySelector(preloaderContent)
    const numberOuterEl = document.querySelector(numberOuter)
    const distance = numberOuterEl.getBoundingClientRect().top - preloaderEl.getBoundingClientRect().top
    const moveStep = -(distance / 3) // Divide by 3 for three equal steps

    // Initial states
    tl.set('[anm-loader="number-wrap"]', { yPercent: -90 }).set(numberOuter, { y: 0 })

    // First step animation
    tl.to('[anm-position="second"] [anm-loader="number-wrap"]', { yPercent: (randomNumbers1 - 1) * -10 })
      .to(numberOuter, { y: moveStep }, '<')
      .to('[anm-position="third"] [anm-loader="number-wrap"]', { yPercent: (randomNumbers3 - 1) * -10 }, '<')

    // Second step animation
    tl.to('[anm-position="second"] [anm-loader="number-wrap"]', { yPercent: (randomNumbers2 - 1) * -10 })
    tl.to(numberOuter, { y: moveStep * 2 }, '<').to('[anm-position="third"] [anm-loader="number-wrap"]', { yPercent: (randomNumbers4 - 1) * -10 }, '<')

    // Final step animation
    tl.to('[anm-position="second"] [anm-loader="number-wrap"]', { yPercent: -90 })
      .to(numberOuter, { y: moveStep * 3 }, '<')
      .to('[anm-position="third"] [anm-loader="number-wrap"]', { yPercent: -90 }, '<')
      .to('[anm-position="first"] [anm-loader="number-wrap"]', { yPercent: 0 }, '<')

    tl.to(wrap, { scaleY: 0, transformOrigin: 'top' }).to('[anm-loader="number-wrap"]', { y: '-20rem', stagger: 0.025, ease: 'expo.inOut' }, '<')
  })
}

function cleanup() {
  ctx && ctx.revert()
}

export default {
  init,
  cleanup,
}
