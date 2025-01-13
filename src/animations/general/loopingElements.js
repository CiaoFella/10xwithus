document.addEventListener('DOMContentLoaded', function () {
  const wordLists = document.querySelectorAll('[data-looping-words-list]')
  wordLists.forEach(wordList => {
    const words = Array.from(wordList.children)
    const totalWords = words.length
    const wordHeight = 100 / totalWords
    const edgeElement = document.querySelector('[data-looping-words-selector]')
    let currentIndex = 0
    function updateEdgeWidth() {
      const centerIndex = (currentIndex + 1) % totalWords
      const centerWord = words[centerIndex]
      const centerWordWidth = centerWord.getBoundingClientRect().width
      const listWidth = wordList.getBoundingClientRect().width
      const percentageWidth = (centerWordWidth / listWidth) * 100
      gsap.to(edgeElement, {
        width: `${percentageWidth}%`,
        duration: 0.5,
        ease: 'Expo.easeOut',
      })
    }
    function moveWords() {
      currentIndex++
      gsap.to(wordList, {
        yPercent: -wordHeight * currentIndex,
        duration: 1.2,
        ease: 'elastic.out(1, 0.85)',
        onStart: updateEdgeWidth,
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
    //   updateEdgeWidth()
    gsap.timeline({ repeat: -1, delay: 1 }).call(moveWords).to({}, { duration: 2 }).repeat(-1)
  })
})
