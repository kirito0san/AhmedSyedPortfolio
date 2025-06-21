import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa'; // General language icon
import { GiEgyptianTemple } from 'react-icons/gi'; // Arabic culture icon
import { FaRegFlag } from 'react-icons/fa'; // English/UK flag icon
import ar from "../../../../assets/ar.png"
import en from "../../../../assets/en.png"
export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    return (
        <button
            className={`fixed hover:!left-0 -left-[80px] duration-300  top-[65px] z-10 cursor-pointer p-2 bg-[#3e3535] rounded-r-lg flex items-center gap-1`}
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
            aria-label={t('toggle_language')}
        >
            {/* Current language indicator */}
            <p className='w-[70px]'>{t("toggle_language")}</p>
            {i18n.language === 'ar' ? (
                <img className='w-[32] h-[32] px-2' src={ar} alt="Arabic Language" />
            ) : (
                <img className='w-[32] h-[32] px-2' src={en} alt="Arabic Language" />
            )}
        </button>
    );
}
