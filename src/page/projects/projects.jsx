import React, { useEffect, useState } from 'react';
import { getData } from '../../helperFunc/getData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Timeline } from 'gsap/gsap-core';
import { NewProjects } from './newProjects/newProjects';
import { ProjectCard } from './ProjectCard/ProjectCard';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getData();
            setProjects(data);
        })();
    }, []);
    // const tl = useRef(null);

    return (
        <div className='relative   !h-max'>
            <div id='wrapper' className="!static  !h-max">
                {/* Viewport */}
                <div id='content' className=" overflow-hidden !h-max">
                    <NewProjects />
                    {/* Scrollable content */}
                    <div className="flex justify-center pt-2 !h-max">
                        <div className='  w-full'>
                            <div id="projectsParent" className='projectsParent grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-auto'>
                                {projects.map((project, index) => (
                                    <ProjectCard project={project} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};