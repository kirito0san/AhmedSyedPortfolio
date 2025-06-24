import React from 'react';
import { useTranslation } from 'react-i18next';

export const ProjectCard = ({ index, project }) => {
    const { t } = useTranslation();

    return (
        <div
            className="project-item p-6 bg-white rounded-xl shadow-lg border border-gray-200 
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
                       group overflow-hidden hover:border-gray-300"
            key={index}
        >
            {/* الصورة مع تأثير إضاءة */}
            <div className="relative  rounded-lg mb-5">
                <div className='shadow-2xl  overflow-hidden max-h-[150px]'>
                    <img
                        className="w-full h-[150px] max-h-[150px] object-cover transform group-hover:scale-110 
                                  transition duration-500 ease-in-out "
                        src={project.preview}
                        alt={project.name}
                        loading="lazy"
                    />
                </div   >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                              opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                    {/* <span className="text-white font-bold text-xl drop-shadow-lg">
                        {project.name}
                    </span> */}
                </div>
            </div>

            {/* عنوان المشروع */}
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">
                {project.name}
            </h3>

            {/* التقنيات المستخدمة */}
            <div className="flex flex-wrap gap-2 mb-5">
                {project.Techs.map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold rounded-full 
                                  bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 
                                  border border-gray-300 hover:border-gray-400 transition-all"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* الوصف */}
            <p className="mb-6 text-gray-600 leading-relaxed border-b border-gray-200 pb-6">
                {project.description}
            </p>

            {/* الأزرار */}
            <div className="flex space-x-3">
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-sm py-2.5 px-4 text-center bg-gradient-to-r from-gray-900 to-gray-700 
                                  hover:from-gray-800 hover:to-gray-600 text-white font-medium rounded-lg 
                                  transition-all hover:shadow-md flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {t("live")}
                    </a>
                )}
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-sm py-2.5 px-4 text-center bg-gradient-to-r from-gray-100 to-gray-200 
                                  hover:from-gray-200 hover:to-gray-300 text-gray-800 font-medium rounded-lg 
                                  transition-all border border-gray-300 hover:border-gray-400 hover:shadow-md 
                                  flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        {t("gitHub")}
                    </a>
                )}
            </div>
        </div>
    );
};