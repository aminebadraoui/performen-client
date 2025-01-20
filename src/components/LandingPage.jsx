import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import WhoAmI from './WhoAmI';
import TimeToTakeAction from './TimeToTakeAction';
import ContactForm from './ContactForm';
import CalendlyModal from './CalendlyModal';
import useModalStore from '../stores/useModalStore';
import useContentStore from '../stores/useContentStore';
import Community from './Community';
import EditableImage from './EditableImage';
import EditableText from './EditableText';
import Footer from './Footer';
import useAuthStore from '../stores/useAuthStore';

const LandingPage = () => {
    const heroRef = useRef(null);
    const isInView = useInView(heroRef, { once: false, amount: 0.3 });
    const { isCalendlyOpen, openCalendly, closeCalendly } = useModalStore();
    const { content, loadContent, updateContent, isLoading } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState('');
    const isAdmin = useAuthStore((state) => state.isAdmin);

    useEffect(() => {
        loadContent();
    }, [loadContent]);

    const handleContentSave = (section, field, value) => {
        updateContent('landing', section, field, value);
    };

    const handleSaveCta = () => {
        handleContentSave('hero', 'cta_label', editValue);
        setIsEditing(false);
    };

    if (isLoading || !content) {
        return <div className="min-h-screen bg-black"></div>;
    }

    const pageContent = content.pages.landing;

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <main>
                <section ref={heroRef} className="container mx-auto px-6 py-12 md:py-24 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <motion.div
                            className="w-full md:w-1/2 relative mb-8 md:mb-0 h-[700px]"
                            transition={{ duration: 0.8 }}
                        >
                            <EditableImage
                                content={pageContent.hero.image}
                                onSave={(value) => handleContentSave('hero', 'image', value)}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 custom-gradient pointer-events-none" style={{ zIndex: 0 }}></div>
                        </motion.div>

                        <div className="w-full md:w-1/2 md:pl-12">
                            <EditableText
                                content={pageContent.hero.title}
                                onSave={(value) => handleContentSave('hero', 'title', value)}
                                className="text-4xl md:text-6xl font-bold mb-6"
                                motionProps={{
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { duration: 0.8, delay: 0.4 }
                                }}
                            />
                            <EditableText
                                content={pageContent.hero.subtitle}
                                onSave={(value) => handleContentSave('hero', 'subtitle', value)}
                                className="text-xl mb-8"
                                motionProps={{
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { duration: 0.8, delay: 0.6 }
                                }}
                            />
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <div className="group relative inline-block">
                                    <button
                                        className="bg-yellow-500 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition duration-300"
                                        onClick={openCalendly}
                                    >
                                        {pageContent.hero.cta_label}
                                    </button>
                                    {isAdmin && (
                                        <button
                                            onClick={() => {
                                                setEditValue(pageContent.hero.cta_label);
                                                setIsEditing(true);
                                            }}
                                            className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-yellow-500 text-black px-4 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            Edit
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <WhoAmI />
                <TimeToTakeAction openCalendly={openCalendly} />
                <Community />
                <ContactForm />
            </main>

            <Footer />
            <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
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
                                onClick={handleSaveCta}
                                className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandingPage;