import React from 'react'
import { useTranslation } from 'react-i18next'

export const ProjectCard = ({ index, project }) => {
    const { t } = useTranslation()
    return (
        <div
            className={`project-item project p-8 bg-white rounded-2xl shadow-xl 
                border border-gray-100 transform transition-all hover:scale-[1.01] 
                hover:shadow-2xl group overflow-hidden`}
            key={index}
            data-speed={index * 2}
        >
            <div className="relative overflow-hidden rounded-lg h-60 mb-6">
                <img
                    className='w-full h-full object-cover transform group-hover:scale-105 transition duration-700'
                    src={project.preview}
                    alt={project.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                    <span className="text-white font-bold text-lg">{project.name}</span>
                </div>
            </div>

            <p className='text-2xl font-extrabold mb-3 text-black'>
                {project.name}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.Techs.map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-800 border border-gray-200"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <p className='mb-6 text-gray-700 leading-relaxed border-b border-gray-100 pb-6'>{project.description}</p>

            <div className='flex space-x-3'>
                <a
                    href={project?.live}
                    target='_blank'
                    className='flex-1 text-xs  cursor-pointer py-2 px-4 text-center bg-black hover:bg-gray-800 text-white font-medium rounded-md 
                  transition-all hover:shadow-md flex items-center justify-center gap-2'
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {t("live")}
                </a>
                <a
                    href={project?.github}
                    target='_blank'
                    className='flex-1 text-xs py-2 px-4 cursor-pointer text-center bg-transparent hover:bg-gray-100 text-gray-800 font-medium rounded-md 
                  transition-all border border-gray-300 hover:shadow-md flex items-center justify-center gap-2'
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    {t("gitHub")}
                </a>
            </div>
        </div>
    )
}
