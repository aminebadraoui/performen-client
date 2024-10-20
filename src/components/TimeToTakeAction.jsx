import React from 'react';
import { motion } from 'framer-motion';
import useModalStore from '../stores/useModalStore';
const TimeToTakeAction = () => {
    const { openCalendly } = useModalStore();
    return (
        <section className="bg-black py-20">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-8 text-yellow-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Il est temps d'agir
                </motion.h2>
                <motion.p
                    className="text-xl mb-12 text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Ne laisse pas passer cette opportunité de transformer ta vie. Commence ton voyage vers une meilleure version de toi dès aujourd'hui.
                </motion.p>
                <motion.button
                    className="bg-yellow-500 text-black px-8 py-4 rounded-md text-xl font-semibold hover:bg-yellow-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openCalendly}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Réserve ta consultation
                </motion.button>
            </div>
        </section>
    );
};

export default TimeToTakeAction;