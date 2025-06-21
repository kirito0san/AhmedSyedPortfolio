import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import pdfUrl from "../../assets/AhmedSyedResme  .pdf";
const Resume = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {t('title')}
                    </h2>
                    <p className="mt-3 text-xl text-gray-500">
                        {t('subtitle')}
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    {/* PDF Preview */}
                    <div className="p-8 border-b border-gray-200">
                        <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6 mb-6">
                            <FaFilePdf className="text-red-500 text-6xl" />
                            <div className={t('direction') === 'rtl' ? 'mr-4' : 'ml-4'}>
                                <h3 className="text-lg font-medium text-gray-900">{t('filename')}</h3>
                                <p className="text-gray-500">{t('filesize')}</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <iframe
                                src={pdfUrl}
                                className="w-full h-screen border border-gray-300 rounded-lg"
                                title={t('previewTitle')}
                            >
                                <p>{t('unsupportedBrowser')}</p>
                            </iframe>
                        </div>
                    </div>

                    {/* Download Button */}
                    <div className="bg-gray-50 px-8 py-6 text-center">
                        <a
                            href={pdfUrl}
                            download={t('downloadFilename')}
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                        >
                            {t('direction') === 'rtl' ? (
                                <>
                                    {t('downloadButton')}
                                    <FaDownload className="ml-2" />
                                </>
                            ) : (
                                <>
                                    <FaDownload className="mr-2" />
                                    {t('downloadButton')}
                                </>
                            )}
                        </a>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 text-center text-gray-500">
                    <p>{t('contactText')}</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;