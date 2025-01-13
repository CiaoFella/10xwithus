document.addEventListener('DOMContentLoaded', function () {
  const switchImages = document.querySelectorAll('[data-switch-images]')

  switchImages.forEach(switchImage => {
    const images = Array.from(switchImage.children)
    let currentIndex = 0
    let interval

    const attribute = switchImage.getAttribute('data-switch-images')
    const reference = document.querySelector(`[data-switch-images-reference=${attribute}]`)
    const referenceBox = reference.getBoundingClientRect()

    console.log(referenceBox)

    // set switch image width and height to reference

    switchImage.style.width = `${referenceBox.width}px`
    switchImage.style.height = `${referenceBox.height}px`

    images.forEach((img, index) => {
      img.style.position = 'absolute'
      img.style.top = '0'
      img.style.left = '0'
      img.style.zIndex = images.length - index // Highest z-index for first image
      img.style.opacity = index === 0 ? 1 : 0
    })

    const switchToNextImage = () => {
      const currentImage = images[currentIndex]
      currentIndex = (currentIndex + 1) % images.length
      const nextImage = images[currentIndex]

      gsap.to(currentImage, {
        opacity: 0,
        duration: 0,
      })
      gsap.to(nextImage, {
        opacity: 1,
        duration: 0,
      })
    }

    const startInterval = () => {
      interval = setInterval(switchToNextImage, 500)
    }

    const stopInterval = () => {
      clearInterval(interval)
    }

    // Add mouse events
    switchImage.addEventListener('mouseenter', stopInterval)
    switchImage.addEventListener('mouseleave', startInterval)

    // Start the animation
    startInterval()
  })
})
