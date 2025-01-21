import gsap from 'gsap'
import Flip from 'gsap/Flip.js'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
import barba from '@barba/core'
import SplitType from 'split-type'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger, Flip)

export { gsap, ScrollTrigger, Flip, barba, SplitType, Lenis }
