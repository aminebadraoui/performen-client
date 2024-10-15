import React from 'react';
import { motion, useInView } from 'framer-motion';

const WhoAmI = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <section ref={ref} className="container mx-auto px-6 py-12 relative">
            <div className="flex items-center justify-between">
                <motion.div
                    className="w-1/2 pr-12"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-6 text-yellow-500">Qui suis-je ?</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </motion.div>
                <motion.div
                    className="w-1/2 relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 custom-gradient z-10"></div>
                    <img
                        src="/assets/Anis-rings.jpg"
                        alt="Anis sur les anneaux"
                        className="w-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default WhoAmI;