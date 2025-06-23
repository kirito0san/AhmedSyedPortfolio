import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useState, useRef, useEffect } from 'react';
import { ProjectControls } from './ProjectControls/ProjectControls';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { ProjectBackground } from './ProjectBackground/ProjectBackground';
import Layers from "../../../assets/Feature Section.webp";
import pos from "../../../assets/Pos.webp";
import bookingLeap2 from "../../../assets/bookingLeap2.webp";
import bookingLeap from "../../../assets/bookingLeap.webp";
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export const NewProjects = () => {
    const { t } = useTranslation();
    const projects = [
        {
            name: "Layers",
            preview: Layers,
            description: t("Layers"),
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            name: "bookingLeap",
            preview: bookingLeap,
            preview2: bookingLeap2,
            description: t("bookingLeap"),
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            name: "Pos",
            preview: pos,
            description: t("pos"),
            liveUrl: "#",
            githubUrl: "#",
        },
    ];

    const [inViewProject, setInViewProject] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const animationRef = useRef(null);
    const autoPlayRef = useRef(null);

    // Initial animation setup
    useGSAP(() => {
        gsap.from(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power3.out"
        });
    }, []);

    // Card change animation with 3D tilt effect
    const animateCardChange = (direction) => {
        if (animationRef.current) animationRef.current.kill();

        const fromX = direction === 'next' ? 100 : -100;
        const rotationY = direction === 'next' ? 15 : -15;

        animationRef.current = gsap.timeline({
            defaults: { ease: "power3.inOut" }
        })
            .to(cardRef.current, {
                opacity: 0,
                x: fromX * 0.5,
                rotationY: rotationY,
                duration: 0.3,
            })
            .set(cardRef.current, {
                opacity: 0,
                x: -fromX,
                rotationY: -rotationY,
            })
            .to(cardRef.current, {
                opacity: 1,
                x: 0,
                rotationY: 0,
                duration: 0.7,
                ease: "back.out(1.2)"
            });
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
                autoPlayRef.current = null;
            }
            return;
        }

        autoPlayRef.current = setInterval(() => {
            changeProject('next');
        }, 5000);

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying, inViewProject]);

    const changeProject = (direction) => {
        setInViewProject(prev => {
            const newIndex = direction === 'next'
                ? (prev >= projects.length - 1 ? 0 : prev + 1)
                : (prev === 0 ? projects.length - 1 : prev - 1);

            animateCardChange(direction);
            return newIndex;
        });
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        changeProject('next');
    };

    const handleBack = () => {
        setIsAutoPlaying(false);
        changeProject('back');
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(prev => !prev);
    };

    return (
        <section
            ref={containerRef}
            className="py-20 px-1 md:px-4 sm:px-6 rounded-2xl lg:px-8 bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff] relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        {t("LastProjects")}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t("LastProjectsDescription")}
                    </p>
                </div>

                <div className="relative min-h-[600px] ">
                    <ProjectBackground project={projects[inViewProject]} />

                    <div ref={cardRef} className="relative z-10 transform-style-preserve-3d">
                        <ProjectCard project={projects[inViewProject]} />
                    </div>

                    <ProjectControls
                        onNext={handleNext}
                        onBack={handleBack}
                        currentIndex={inViewProject}
                        totalProjects={projects.length}
                        isAutoPlaying={isAutoPlaying}
                        onToggleAutoPlay={toggleAutoPlay}
                    />
                </div>

                <div className="flex justify-center items-center mt-10 space-x-4">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setInViewProject(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === inViewProject
                                ? 'bg-indigo-600 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}

                    <button
                        onClick={toggleAutoPlay}
                        className="ml-4 text-indigo-600 hover:text-indigo-800 transition-colors"
                        aria-label={isAutoPlaying ? 'Pause auto-play' : 'Play automatically'}
                    >
                        {isAutoPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};