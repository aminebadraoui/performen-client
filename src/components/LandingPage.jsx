import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import WhoAmI from './WhoAmI';
import TimeToTakeAction from './TimeToTakeAction';
import ContactForm from './ContactForm';
import CalendlyModal from './CalendlyModal';
import useModalStore from '../stores/useModalStore';
import useContentStore from '../stores/useContentStore';
import Community from './Community';
import EditableContent from './EditableContent';
import Footer from './Footer';

const LandingPage = () => {
    const heroRef = useRef(null);
    const isInView = useInView(heroRef, { once: false, amount: 0.3 });
    const { isCalendlyOpen, openCalendly, closeCalendly } = useModalStore();
    const { content, loadContent, updateContent, isLoading } = useContentStore();

    useEffect(() => {
        loadContent();
    }, [loadContent]);

    const handleContentSave = (section, field, value) => {
        updateContent('landing', section, field, value);
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
                            <div className="absolute inset-0 custom-gradient z-10"></div>
                            <EditableContent
                                content={pageContent.hero.image}
                                type="image"
                                onSave={(value) => handleContentSave('hero', 'image', value)}
                                className="w-full h-full object-cover absolute inset-0"
                            />
                        </motion.div>

                        <div className="w-full md:w-1/2 md:pl-12">
                            <EditableContent
                                content={pageContent.hero.title}
                                onSave={(value) => handleContentSave('hero', 'title', value)}
                                className="text-4xl md:text-6xl font-bold mb-6"
                                motionProps={{
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { duration: 0.8, delay: 0.4 }
                                }}
                            />
                            <EditableContent
                                content={pageContent.hero.subtitle}
                                onSave={(value) => handleContentSave('hero', 'subtitle', value)}
                                className="text-xl mb-8"
                                motionProps={{
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { duration: 0.8, delay: 0.6 }
                                }}
                            />
                            <motion.button
                                className="bg-yellow-500 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                onClick={openCalendly}
                            >
                                <EditableContent
                                    content={pageContent.hero.cta_label}
                                    onSave={(value) => handleContentSave('hero', 'cta_label', value)}
                                />
                            </motion.button>
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
        </div>
    );
};

export default LandingPage;