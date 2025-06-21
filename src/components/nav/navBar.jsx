import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom'

export const NavBar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const { pathname } = location;
    return (
        <nav className={`py-1 px-2 *:hover:text-amber-100 z-50 duration-300 absolute top-0 ${i18n.language == "en" ? "right-0  rounded-bl-2xl" : "left-0  rounded-br-2xl"}  bg-[var(--bg-nav)] flex gap-5`}>
            <Link className={`p-2  ${pathname === '/' ? 'text-amber-100 border-b border-amber-300' : ''}`} to="/">{t("Home")}</Link>
            <Link className={`p-2  ${pathname === '/project' ? 'text-amber-100 border-b border-amber-300' : ''}`} to="/project">{t("Project")}</Link>
            <Link className={`p-2  ${pathname === '/resume' ? 'text-amber-100 border-b border-amber-300' : ''}`} to="/resume">{t("Resume")}</Link>
        </nav>
    )
}
