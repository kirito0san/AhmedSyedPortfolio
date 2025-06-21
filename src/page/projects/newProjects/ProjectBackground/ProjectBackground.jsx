import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ProjectBackground = ({ project }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        if (bgRef.current) {
            gsap.to(bgRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            });
        }
    }, [project]);

    return (
        <div
            ref={bgRef}
            className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 transition-opacity duration-500"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <img
                src={project.preview2 || project.preview}
                alt={`خلفية مشروع ${project.name}`}
                className="w-full h-full object-cover object-center"
            />
        </div>
    );
};