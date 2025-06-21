import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react'
import { useTranslation } from 'react-i18next';
gsap.registerPlugin(SplitText);

export const Home = () => {
    const h2Action = useRef(null)
    const PAction = useRef(null)
    const { t } = useTranslation()
    useGSAP(() => {
        if (!h2Action.current) return;
        let split = SplitText.create(h2Action.current, { type: "words,chars,lines" })
        gsap.from(split.chars, {
            y: 10,
            color: "black",
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: "back.out(1.7)",
            repeatDelay: 1,
            yoyo: true,
            // colorize: {
            //     duration: 2,
            //     colors: ["#000000", "#3498db", "#e74c3c"],
            //     ease: "none"
            // }
        })

    }, [])
    return (
        <div className='flex flex-col h-full justify-center items-center gap-5'>
            <h2 ref={h2Action} className='text-3xl md:text-4xl'> Front-End Software Developer</h2>
            <p className='text-2xl text-center md:text-3xl' ref={PAction}>{t("mainText")}</p>
        </div>
    )
}
