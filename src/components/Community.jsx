import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useContentStore from '../stores/useContentStore';
import useAuthStore from '../stores/useAuthStore';
import SkoolComponent from './SkoolComponent';
import EditableText from './EditableText';

const Community = () => {
    const { content, updateContent } = useContentStore();
    const pageContent = content.pages.landing;
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState('');
    const [editField, setEditField] = useState('');

    const handleContentSave = (field, value) => {
        updateContent('landing', 'community', field, value);
    };

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <div className="relative inline-block group">
                    <EditableText
                        content={pageContent.community.title}
                        onSave={(value) => handleContentSave('title', value)}
                        className="text-4xl font-bold mb-8 text-yellow-500"
                    />
                </div>
                <div className="relative inline-block group">
                    <EditableText
                        content={pageContent.community.subtitle}
                        onSave={(value) => handleContentSave('subtitle', value)}
                        className="text-xl mb-12 text-gray-950"
                    />
                </div>

                <div className="container mx-auto px-6 relative w-1/4">
                    <SkoolComponent />
                </div>
            </div>
            {isEditing && (
                <div className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex items-center justify-center p-8">
                    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Text</h3>
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
                                    handleContentSave(editField, editValue);
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

export default Community;