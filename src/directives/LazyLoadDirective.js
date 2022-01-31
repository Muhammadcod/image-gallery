export default {
  mounted: (el, binding) => {
    function loadImage () {
      const imageElement = Array.from(el.children).filter(
        el => el.nodeName === 'IMG'
      )
      if (imageElement[1]) {
        imageElement[1].addEventListener('load', () => {
          // eslint-disable-next-line no-return-assign
          setTimeout(() => imageElement[0].style.visibility = 'hidden',
            200)
        })
        imageElement[1].addEventListener('error', () => console.log('error'))
        imageElement[1].src = binding?.value
      }
    }

    function handleIntersect (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(el)
        }
      })
    }

    function createObserver () {
      const options = {
        root: null,
        threshold: '0'
      }
      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(el)
    }
    if (window.IntersectionObserver) {
      createObserver()
    } else {
      loadImage()
    }
  }
}
