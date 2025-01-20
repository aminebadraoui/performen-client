import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useContentStore from '../stores/useContentStore';
import EditableText from './EditableText';
import EditableImage from './EditableImage';

const WhoAmI = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });
    const { content, updateContent } = useContentStore();
    const pageContent = content.pages.landing;

    const handleContentSave = (field, value) => {
        updateContent('landing', 'whoami', field, value);
    };

    return (
        <div className="bg-white">
            <section ref={ref} className="container bg-white mx-auto px-6 py-12 relative">
                <EditableText
                    content={pageContent.whoami.title}
                    onSave={(value) => handleContentSave('title', value)}
                    className="text-4xl font-bold text-center mb-12 text-yellow-500"
                />

                <div className="flex flex-col space-y-16">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <motion.div
                            className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 flex items-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <EditableText
                                content={pageContent.whoami.content}
                                onSave={(value) => handleContentSave('content', value)}
                                className="text-lg text-gray-950 whitespace-pre-wrap"
                            />
                        </motion.div>
                        <motion.div
                            className="w-full md:w-1/2 flex items-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="aspect-[4/3] relative w-full">
                                <EditableImage
                                    content={pageContent.whoami.image}
                                    onSave={(value) => handleContentSave('image', value)}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhoAmI;