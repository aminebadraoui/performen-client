import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-yellow-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Contacte-nous
                </motion.h2>
                <motion.form
                    className="max-w-lg mx-auto"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-yellow-500 mb-2">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-black bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-yellow-500 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-black bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-yellow-500 mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-3 py-2 text-black bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Envoyer
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactForm;