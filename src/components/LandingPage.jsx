import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Results from './Results';
import VideoTestimonials from './VideoTestimonials';
import Footer from './Footer';
import WhoAmI from './WhoAmI';
import TimeToTakeAction from './TimeToTakeAction';
import ContactForm from './ContactForm';
import CalendlyModal from './CalendlyModal';
import useModalStore from '../stores/useModalStore';



const LandingPage = () => {
    const heroRef = useRef(null);
    const isInView = useInView(heroRef, { once: false, amount: 0.3 });

    const { isCalendlyOpen, openCalendly, closeCalendly } = useModalStore();



    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <header className="bg-black py-4 px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
                    <img src="/assets/logo.webp" alt="Logo Performen" className="h-16 md:h-20 mb-4 md:mb-0" />
                    <nav className="mb-4 md:mb-0">
                        <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-8">
                            <li><Link to="/" className="hover:text-yellow-500">Accueil</Link></li>
                            <li><Link to="/programs" className="hover:text-yellow-500">Programmes</Link></li>
                            <li><Link to="/results" className="hover:text-yellow-500">Résultats</Link></li>
                            <li><Link to="/about" className="hover:text-yellow-500">À propos</Link></li>
                        </ul>
                    </nav>
                    <motion.button
                        className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={openCalendly}
                    >
                        Réserve ta consultation
                    </motion.button>
                </div>
            </header>
            <main>
                {/* Hero Section */}

                <section ref={heroRef} className="container mx-auto px-6 py-12 md:py-24 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <motion.div
                            className="w-full md:w-1/2 relative mb-8 md:mb-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute inset-0 custom-gradient z-10"></div>
                            <img
                                src="/assets/Anis-hero-2.jpg"
                                alt="Corps de Superhéros"
                                className="w-full object-cover"
                            />
                        </motion.div>
                        <div className="w-full md:w-1/2 md:pl-12">
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Construis le corps de tes rêves
                            </motion.h1>
                            <motion.button
                                className="bg-yellow-500 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                onClick={openCalendly}
                            >
                                Réserve ta consultation
                            </motion.button>
                        </div>
                    </div>
                </section>

                {/* Who Am I Section */}
                <WhoAmI />

                {/* Time To Take Action Section */}
                <TimeToTakeAction openCalendly={openCalendly} />

                {/* Results Section */}
                <Results />

                {/* Video Testimonials Section */}
                <VideoTestimonials />

                {/* Contact Form Section */}
                <ContactForm />
            </main>
            <Footer />
            <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
        </div>
    );
};

export default LandingPage;