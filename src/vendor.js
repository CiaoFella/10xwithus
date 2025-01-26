import gsap from 'gsap'
import Flip from 'gsap/Flip.js'
import ScrollTrigger from 'gsap/ScrollTrigger.js'
import barba from '@barba/core'
import SplitType from 'split-type'
import LocomotiveScroll from 'locomotive-scroll'

gsap.registerPlugin(ScrollTrigger, Flip)

export { gsap, ScrollTrigger, LocomotiveScroll, Flip, barba, SplitType }
