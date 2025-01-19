import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

const UnderConstruction = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const setIsUnlocked = useAuthStore((state) => state.setIsUnlocked);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'invictus') {
            setIsUnlocked(true);
            navigate('/');
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-yellow-500 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-gray-950 mb-4 text-center"
                >
                    En Construction test
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 mb-6 text-center"
                >
                    Nous travaillons dur pour vous apporter quelque chose d'incroyable. Entrez le mot de passe pour avoir un aperçu !
                </motion.p>
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Entrez le mot de passe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-black text-yellow-500 font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 hover:text-black transition duration-300"
                    >
                        Entrer
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default UnderConstruction;