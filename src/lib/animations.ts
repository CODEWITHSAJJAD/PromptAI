import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Transition } from 'framer-motion';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const animations = {
    fadeIn: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as Transition,
    },
    staggerContainer: {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
};

export const gsapFadeIn = (element: string | HTMLElement) => {
    return gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
        },
    });
};
