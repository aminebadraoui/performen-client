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
import useStaticContentStore from '../stores/useStaticContentStore';
import { createDirectus, rest, readItem, staticToken, graphql } from '@directus/sdk';
import SkoolComponent from './SkoolComponent';
import Community from './Community';
const directus = createDirectus('https://performen-dashboard.mnfstagency.com')
    .with(graphql())
    .with(staticToken('Zwr4a6GH6F5pwhCGW1CcbNFVs-uIM7R6'));



const LandingPage = () => {
    const heroRef = useRef(null);
    const isInView = useInView(heroRef, { once: false, amount: 0.3 });

    const { isCalendlyOpen, openCalendly, closeCalendly } = useModalStore();
    const [pageContent, setPageContent] = useState(null);


    useEffect(() => {
        const getPageContent = async () => {
            try {
                const response = await directus.query(`
                    query {
                        pages(filter: { title: { _eq: "Home" } }) {
                            id
                            title
                            builder {
                                item {
                                    ... on hero {
                                        id
                                        title
                                        subtitle
                                        main_image {
                                            id
                                            filename_disk
                                        }
                                        cta_label
                                        cta_link
                                    }
                                }
                            }
                            status
                        }
                    }
                `);

                console.log('Home page response:', response);

                if (response.pages[0]) {  // Changed from response.pages_by_id
                    setPageContent(response.pages[0]);
                }
            } catch (error) {
                console.error('Error fetching home page:', error);
            }
        };

        getPageContent();
    }, []);

    // Create hero variable
    const hero = pageContent?.builder[0]?.item;

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">

            {pageContent && (
                <main>
                    {/* Hero Section */}
                    <section ref={heroRef} className="container mx-auto px-6 py-12 md:py-24 relative">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <motion.div
                                className="w-full md:w-1/2 relative mb-8 md:mb-0 h-[700px]" // Added fixed height

                                transition={{ duration: 0.8 }}
                            >
                                <div className="absolute inset-0 custom-gradient z-10"></div>
                                {hero?.main_image && (
                                    <img
                                        src={`https://performen-dashboard.mnfstagency.com/assets/${hero.main_image.filename_disk}`}
                                        alt="Hero Image"
                                        className="w-full h-full object-cover absolute inset-0" // Added absolute positioning
                                        onError={(e) => {
                                            console.error('Error loading hero image:', e);
                                            console.log('Hero image source:', e.target.src);
                                            console.log('Hero data:', hero);
                                        }}
                                    />
                                )}
                            </motion.div>

                            <div className="w-full md:w-1/2 md:pl-12">
                                <motion.h1
                                    className="text-4xl md:text-6xl font-bold mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    {hero?.title}
                                </motion.h1>
                                <motion.p
                                    className="text-xl mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    {hero?.subtitle}
                                </motion.p>
                                <motion.button
                                    className="bg-yellow-500 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    onClick={openCalendly}
                                >
                                    {hero?.cta_label}
                                </motion.button>
                            </div>
                        </div>
                    </section>

                    {/* Who Am I Section */}
                    <WhoAmI />

                    {/* Time To Take Action Section */}
                    <TimeToTakeAction openCalendly={openCalendly} />

                    {/* Results Section */}
                    {/* <Results />

                    {/* Video Testimonials Section */}
                    {/* <VideoTestimonials /> */}

                    {/* Community Section */}
                    <Community />




                    {/* Contact Form Section */}
                    <ContactForm />
                </main>
            )}

            <Footer />
            <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
        </div>
    );
};

export default LandingPage;