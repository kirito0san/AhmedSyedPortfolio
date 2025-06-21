import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)
export const MovingBox = () => {
    const actonBox = useRef(null)
    useGSAP(() => {
        gsap.to(actonBox.current, {
            rotation: "360",
            // stagger: 0.04,
            duration: 10,
            scale: 1.5,
            ease: "power4",
            rotate: 360,
            // repeat: -1,
            yoyo: true,
            yoyoEase: "power4",
            background: "red",
            y: "300",
            scrollTrigger: {
                trigger: actonBox.current,
                toggleActions: "play none none pause",
                start: "clamp(top 60%)",
                markers: true,
                end: "bottom top",
                scrub: 3
            }
        })
    }, { container: ".parent" })
    return (
        <div ref={actonBox} className='w-20 sticky top-0 left-0   h-20 bg-amber-300'>MovingBox</div>
    )
}
