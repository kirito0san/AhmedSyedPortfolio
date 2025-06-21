import React from 'react'
import { NavBar } from '../../components/nav/navBar';

import { Footer } from '../../components/footer/Footer';
import { AllRoutes } from './routes/routes';
import { SideBar } from './sideBar/sideBar';
import { MainLayout } from './mainLayout/mainLayout';

export const AppLayout = () => {

    return (
        <div className=' md:p-5  bg-[var(--bg-root)] text-white min-h-screen flex gap-3 w-full'>
            <SideBar />
            <MainLayout />
        </div>
    )
}
