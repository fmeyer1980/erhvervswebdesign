import Alpine from 'alpinejs'
import Lenis from 'lenis'
import intersect from '@alpinejs/intersect'
 
Alpine.plugin(intersect)

window.Alpine = Alpine

Alpine.start()

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)