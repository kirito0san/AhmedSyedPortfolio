import React, { useEffect } from 'react';
import { NavBar } from '../../../components/nav/navBar';
import { AllRoutes } from '../routes/routes';
import { Footer } from '../../../components/footer/Footer';
import { HeadingWord } from './headingWord/headingWord';
import { MovingBox } from './MovingBox/MovingBox';
import { useTranslation } from 'react-i18next';

export const MainLayout = () => {
    const { i18n } = useTranslation();

    // تأكد من ثبات لغة التطبيق عند تغيير المسار
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng');
        if (savedLanguage && savedLanguage !== i18n.language) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return (
        <div className='bg-[var(--bg-main)] flex flex-col shadow-[0px_0px_17px_-10px_#eee] mx-auto rounded-2xl my-10 md:my-0 md:px-7 px-2 pt-15 md:pt-8 py-8 relative w-[90%] md:w-[68%]'>
            <NavBar />
            <HeadingWord key={i18n.language} /> {/* أضفت key لتجبر إعادة التحميل عند تغيير اللغة */}
            <div className='p-5 flex-1 mt-3'>
                <AllRoutes />
            </div>
            <Footer />
            {/* <MovingBox /> */}
        </div>
    );
};