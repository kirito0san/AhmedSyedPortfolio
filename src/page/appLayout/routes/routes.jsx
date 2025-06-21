import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from '../../home/home';
import { Projects } from '../../projects/projects';
import { About } from '../../About/About';
import Resume from '../../resume/Resume';

export const AllRoutes = () => {
    const routs = [
        { path: "/", element: <Home /> },
        { path: "/project", element: <Projects /> }
        , { path: "/Resume", element: <Resume /> }
    ]
    return (

        <Routes>
            {routs.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />))}
        </Routes>

    )
}
