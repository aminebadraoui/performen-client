import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useModalStore from '../stores/useModalStore';
import useContentStore from '../stores/useContentStore';
import useAuthStore from '../stores/useAuthStore';
import EditableText from './EditableText';

const TimeToTakeAction = () => {
    const { openCalendly } = useModalStore();
    const { content, updateContent } = useContentStore();
    const pageContent = content.pages.landing;
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState('');

    const handleContentSave = (field, value) => {
        updateContent('landing', 'action', field, value);
    };

    return (
        <section className="bg-black py-20">
            <div className="container mx-auto px-6 text-center">
                <EditableText
                    content={pageContent.action.title}
                    onSave={(value) => handleContentSave('title', value)}
                    className="text-4xl font-bold mb-8 text-yellow-500"
                    motionProps={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6 }
                    }}
                />
                <EditableText
                    content={pageContent.action.subtitle}
                    onSave={(value) => handleContentSave('subtitle', value)}
                    className="text-xl mb-12 text-gray-300"
                    motionProps={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.6, delay: 0.2 }
                    }}
                />
                <motion.div
                    className="relative inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button
                        className="bg-yellow-500 text-black px-8 py-4 rounded-md text-xl font-semibold hover:bg-yellow-600 transition duration-300"
                        onClick={openCalendly}
                    >
                        {pageContent.action.cta_label}
                    </button>
                    {useAuthStore((state) => state.isAdmin) && (
                        <button
                            onClick={() => {
                                setEditValue(pageContent.action.cta_label);
                                setIsEditing(true);
                            }}
                            className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-black px-4 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors opacity-0 group-hover:opacity-100"
                        >
                            Edit
                        </button>
                    )}
                </motion.div>
            </div>
            {isEditing && (
                <div className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex items-center justify-center p-8">
                    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Button Text</h3>
                        <input
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="w-full p-2 mb-4 border rounded text-gray-900"
                        />
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    handleContentSave('cta_label', editValue);
                                    setIsEditing(false);
                                }}
                                className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TimeToTakeAction;