import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="bg-black py-4 px-6 flex justify-between items-center">
                <img src="/assets/logo.webp" alt="Logo Performen" className="h-20" />
                <nav className="flex-grow">
                    <ul className="flex justify-center space-x-8">
                        <li><Link to="/" className="hover:text-yellow-500">Accueil</Link></li>
                        <li><Link to="/programs" className="hover:text-yellow-500">Programmes</Link></li>
                        <li><Link to="/results" className="hover:text-yellow-500">Résultats</Link></li>
                        <li><Link to="/about" className="hover:text-yellow-500">À propos</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="container mx-auto px-6 py-12 relative">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="w-1/2 relative"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 custom-gradient z-10"></div>
                        <img
                            src="/assets/Anis-superhero-2.png"
                            alt="Corps de Superhéros"
                            className="w-full object-cover"
                        />
                    </motion.div>
                    <div className="w-1/2 pl-12">
                        <motion.h1
                            className="text-6xl font-bold mb-6"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            Construis un corps de superhéros
                        </motion.h1>
                        <motion.button
                            className="bg-yellow-500 text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            OBTIENS TON PROGRAMME
                        </motion.button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;