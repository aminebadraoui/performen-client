import React from 'react';
import { motion } from 'framer-motion';
import useModalStore from '../stores/useModalStore';
import SkoolComponent from './SkoolComponent';

const Community = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-8 text-yellow-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Rejoins La Confrérie
                </motion.h2>
                <motion.p
                    className="text-xl mb-12 text-gray-950"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Confrérie visant la perte de poids et la perfection de l'être. Rejoins une communauté d'hommes déterminés à transformer leur vie.
                </motion.p>

                <div className="container mx-auto px-6  relative w-1/4">
                    <SkoolComponent />
                </div>
            </div>
        </section>
    );
};

export default Community;