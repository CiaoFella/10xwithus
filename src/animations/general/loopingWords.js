import { gsap } from '../../vendor.js'

let ctx

function init() {
  const wordLists = document.querySelectorAll('[data-looping-words-list]')

  if (wordLists.length === 0) return
  wordLists.forEach(wordList => {
    const words = Array.from(wordList.children)
    const totalWords = words.length
    const wordHeight = 100 / totalWords

    let currentIndex = 0

    function moveWords() {
      currentIndex++
      gsap.to(wordList, {
        yPercent: -wordHeight * currentIndex,
        duration: 1,
        ease: 'expo.out',
        onComplete: function () {
          if (currentIndex >= totalWords - 3) {
            wordList.appendChild(wordList.children[0])
            currentIndex--
            gsap.set(wordList, { yPercent: -wordHeight * currentIndex })
            words.push(words.shift())
          }
        },
      })
    }
    gsap.timeline({ repeat: -1, delay: 1 }).call(moveWords).to({}, { duration: 1.5 }).repeat(-1)
  })
}

function cleanup() {
  ctx && ctx.revert()
}

export default {
  init,
  cleanup,
}
