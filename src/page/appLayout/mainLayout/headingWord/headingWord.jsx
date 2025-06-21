import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(SplitText);

export const HeadingWord = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const word = useRef(null);
    const containerRef = useRef(null);
    const splitInstance = useRef(null);
    useGSAP(() => {
        if (!word.current) return;
        // Clean up previous SplitText instance
        if (splitInstance.current) {
            splitInstance.current;
        }
        // Apply RTL direction for Arabic
        if (i18n.language === 'ar') {
            containerRef.current.style.direction = 'rtl';
            word.current.style.unicodeBidi = 'bidi-override';
        } else {
            containerRef.current.style.direction = 'ltr';
            word.current.style.unicodeBidi = 'normal';
        }
        splitInstance.current = word.current
        // Animation
        gsap.from(splitInstance.current, {
            y: 20,
            opacity: 0,
            stagger: 0.02,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
        // Cleanup
        return () => {
            if (splitInstance.current) {
                splitInstance.current;
            }
        };
    }, [location.pathname, i18n.language]);

    const getTranslationKey = () => {
        const path = location.pathname.slice(1);
        return path || 'home';
    };
    return (
        <div className={` flex flex-col w-full ${i18n.language == "en" ? "text-left" : "text-right"}`} ref={containerRef}>
            <h1
                ref={word}
                className='text-3xl rtl:text-right md:text-5xl'
                key={`${getTranslationKey()}-${i18n.language}`}
            >
                {t(getTranslationKey())}
            </h1>
            <div className='w-[10%] mt-[25px] h-[5px] rounded-3xl bg-amber-100'></div>
        </div>
    );
};