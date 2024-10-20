import React from 'react';
import { InlineWidget } from 'react-calendly';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import useModalStore from '../stores/useModalStore';

const CalendlyModal = () => {
    const { isCalendlyOpen, closeCalendly } = useModalStore();

    const calendlyUrl = 'https://calendly.com/aidenanis-pm-fitness/appel-coaching';
    return (
        <AnimatePresence>
            {isCalendlyOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeCalendly}
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-lg w-full max-w-4xl h-[80vh] overflow-hidden relative"
                    >
                        <button
                            onClick={closeCalendly}
                            className="absolute top-2 left-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10"
                        >
                            <IoMdClose size={24} />
                        </button>
                        <div className="h-full">
                            <InlineWidget url={calendlyUrl} styles={{ height: '100%' }} />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CalendlyModal;