import React from 'react';
import { motion } from 'framer-motion';
import useContentStore from '../stores/useContentStore';
import SkoolComponent from './SkoolComponent';
import EditableContent from './EditableContent';

const Community = () => {
    const { content, updateContent } = useContentStore();
    const pageContent = content.pages.landing;

    const handleContentSave = (field, value) => {
        updateContent('landing', 'community', field, value);
    };

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <EditableContent
                    content={pageContent.community.title}
                    onSave={(value) => handleContentSave('title', value)}
                    className="text-4xl font-bold mb-8 text-yellow-500"
                />
                <EditableContent
                    content={pageContent.community.subtitle}
                    onSave={(value) => handleContentSave('subtitle', value)}
                    className="text-xl mb-12 text-gray-950"
                />

                <div className="container mx-auto px-6 relative w-1/4">
                    <SkoolComponent />
                </div>
            </div>
        </section>
    );
};

export default Community;