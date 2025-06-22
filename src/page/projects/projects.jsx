import React, { useEffect, useState } from 'react';
import { getData } from '../../helperFunc/getData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { NewProjects } from './newProjects/newProjects';
import { ProjectCard } from './ProjectCard/ProjectCard';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                if (Array.isArray(data)) {
                    setProjects(data);
                } else {
                    setError("Received data is not in expected format");
                }
            } catch (err) {
                setError(err.message);
                console.error("Failed to fetch projects:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-64">Loading projects...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-64 text-red-500">Error loading projects: {error}</div>;
    }

    return (
        <div className='relative !h-max'>
            <div id='wrapper' className="!static !h-max">
                <div id='content' className="overflow-hidden !h-max">
                    <NewProjects />
                    {projects.length > 0 ? (
                        <div className="flex justify-center pt-2 !h-max">
                            <div className='w-full'>
                                <div id="projectsParent" className='projectsParent grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-auto'>
                                    {projects.map((project, index) => (
                                        <ProjectCard key={project.id || index} project={project} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-64">No projects found</div>
                    )}
                </div>
            </div>
        </div>
    );
};