import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export const ProjectControls = ({ onNext, onBack, currentIndex, totalProjects }) => {
    return (
        <div className="relative z-30 mt-8 flex justify-between items-center max-w-2xl mx-auto px-4">
            <button
                onClick={onBack}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors group"
                aria-label="المشروع السابق"
            >
                <FaChevronLeft className="text-indigo-600 group-hover:text-indigo-800 text-xl" />
            </button>

            <div className="text-lg font-medium text-gray-700">
                <span className="text-indigo-600 font-bold">{currentIndex + 1}</span>
                <span className="mx-1">/</span>
                <span>{totalProjects}</span>
            </div>

            <button
                onClick={onNext}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors group"
                aria-label="المشروع التالي"
            >
                <FaChevronRight className="text-indigo-600 group-hover:text-indigo-800 text-xl" />
            </button>
        </div>
    );
};