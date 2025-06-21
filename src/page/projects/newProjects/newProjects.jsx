import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useState, useRef } from 'react';
// import { ProjectSlider } from './ProjectSlider';
import { ProjectControls } from './ProjectControls/ProjectControls';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { ProjectBackground } from './ProjectBackground/ProjectBackground';
import Layers from "../../../assets/Feature Section.webp";
import pos from "../../../assets/Pos.webp";
import bookingLeap2 from "../../../assets/bookingLeap2.webp";
import bookingLeap from "../../../assets/bookingLeap.webp";
import { Translation, useTranslation } from 'react-i18next';
// تسجيل إضافات GSAP
gsap.registerPlugin(ScrollTrigger);

export const NewProjects = () => {
    const { t } = useTranslation()
    const projects = [
        {
            name: "Layers",
            preview: Layers,
            description: t("Layers"),
            liveUrl: "#",
            githubUrl: "#",
            // techStack: ["React", "tailwindcss", "swiper.js"]
        },
        {
            name: "bookingLeap",
            preview: bookingLeap,
            preview2: bookingLeap2,
            description: t("bookingLeap"),
            liveUrl: "#",
            githubUrl: "#",
            // techStack: ["React", "tailwindcss", "swiper.js"]
        },
        {
            name: "Pos",
            preview: pos,
            description: t("pos"),
            liveUrl: "#",
            githubUrl: "#",
            // techStack: ["React", "tailwindcss", "swiper.js"]
        },
    ];

    const [inViewProject, setInViewProject] = useState(0);
    const containerRef = useRef(null);

    // تهيئة أنيميشن GSAP
    useGSAP(() => {
        // أنيميشن لظهور المكون عند التمرير
        gsap.from(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom-=100",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });

        // أنيميشن للبطاقة عند تغيير المشروع
        gsap.from(".project-card", {
            opacity: 0,
            scale: 0.95,
            duration: 0.7,
            ease: "back.out(1.7)"
        });
    }, [inViewProject]);

    // التعامل مع المشروع التالي
    const handleNext = () => {
        setInViewProject(prev =>
            prev >= projects.length - 1 ? 0 : prev + 1
        );
    };

    // التعامل مع المشروع السابق
    const handleBack = () => {
        setInViewProject(prev =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    return (
        <section
            ref={containerRef}
            className="py-20 px-1 md:px-4 sm:px-6 rounded-2xl lg:px-8 bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff]"
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

                <div className="relative">
                    {/* خلفية المشروع */}
                    <ProjectBackground
                        project={projects[inViewProject]}
                    />

                    {/* بطاقة المشروع */}
                    <ProjectCard
                        project={projects[inViewProject]}
                    />

                    {/* عناصر التحكم */}
                    <ProjectControls
                        onNext={handleNext}
                        onBack={handleBack}
                        currentIndex={inViewProject}
                        totalProjects={projects.length}
                    />
                </div>

                {/* مؤشر المشاريع */}
                <div className="flex justify-center mt-10 space-x-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setInViewProject(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === inViewProject
                                ? 'bg-indigo-600 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`انتقل إلى المشروع ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};