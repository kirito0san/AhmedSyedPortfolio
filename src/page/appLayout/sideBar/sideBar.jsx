import React, { useEffect, useState } from 'react'
import photo from '../../../assets/Projections.svg';
import { WhatsUpIcon } from '../../../components/icons/whatsUpIcon';
import { LinkedIn } from '../../../components/icons/linkedIn';
import { Mail } from '../../../components/icons/mail';
import { Contact } from './Contact/contact';
import { Hamburger } from '../../../components/icons/Hamburger';
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';
import { CloseIcon } from '../../../components/icons/CloseIcon';
export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };
        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };


    }, []);
    return (
        <div className={`md:relative  absolute ${isOpen ? " z-[99999]" : ""} flex min-h-full mx-auto`}>
            {/* Toggle Button - positioned absolutely outside the sidebar */}
            <button
                className={`fixed opacity-45 z-[99999] hover:opacity-100 duration-300 left-0 top-5 md:hidden cursor-pointer  p-2 bg-[#3e3535] rounded-r-lg`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <CloseIcon /> : <Hamburger />}
            </button>
            {/* Sidebar Container */}
            <div className={`
            rounded-2xl
                duration-300 ease-in-out 
                ${isOpen ? "w-[350px]" : "w-0  -z-50"} 
                min-h-full  bg-[var(--bg-main)] flex 
            `}>
                {/* Sidebar Content */}
                <div className={`
                    min-h-full 
                    p-5 
                    flex flex-col gap-4 text-xl 
                    items-center
                    rounded-2xl 
                    bg-[var(--bg-main)]
                   shadow-[0px_0px_17px_-10px_#eee]
                    ${isOpen ? "opacity-100" : "opacity-0 -z-50"}
                    transition-opacity duration-300 ease-in-out
                    min-w-[350px]
                    capitalize
                `}>
                    <div className='h-[150px] flex justify-center items-center'>
                        <img className='w-20 h-20 rounded shadow-[0_0_10px_#eee]' src={photo} alt="" />
                    </div>
                    <LanguageSwitcher />

                    <p className='truncate '>ahmed syed fathy</p>
                    <p className='truncate rounded-md bg-[#3d3d3d] px-3 py-1'>react Developer</p>
                    <Contact />
                </div>


            </div>
        </div>
    )
}