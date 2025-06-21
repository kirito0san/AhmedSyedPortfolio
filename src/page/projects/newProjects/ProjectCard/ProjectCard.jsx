import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

export const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const { t } = useTranslation()
    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(cardRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }
            );
        }
    }, [project]);

    return (
        <div
            ref={cardRef}
            className="project-card relative z-20 bg-white/90 backdrop-blur-sm max-w-md mx-auto p-6 rounded-2xl shadow-xl border border-gray-100"
        >
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl transform rotate-1" />
                    <img
                        className="relative rounded-xl w-full h-56 object-cover"
                        src={project.preview}
                        alt={project.name}
                    />
                </div>
            </div>

            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-5">{project.description}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.techStack?.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center space-x-4">
                    <a
                        href={project?.liveUrl}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        {project?.liveUrl ? t("live") : t("noLive")}
                    </a>
                    <a
                        href={project?.githubUrl}
                        className="px-6 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition-colors"
                    >
                        {project?.githubUrl ? t("gitHub") : t("private")}
                    </a>
                </div>
            </div>
        </div>
    );
};