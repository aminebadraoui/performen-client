import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-blacktext-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <img src="/assets/logo.webp" alt="Logo Performen" className="h-12 mb-4" />
                        <p className="text-sm">Construis le corps de tes rêves avec Performen</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-yellow-500">Accueil</Link></li>
                            <li><Link to="/programs" className="hover:text-yellow-500">Programmes</Link></li>
                            <li><Link to="/results" className="hover:text-yellow-500">Résultats</Link></li>
                            <li><Link to="/video-testimonials" className="hover:text-yellow-500">Témoignages Vidéo</Link></li>
                            <li><Link to="/about" className="hover:text-yellow-500">À propos</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-sm">Email: contact@performen.com</p>
                        <p className="text-sm">Téléphone: +33 1 23 45 67 89</p>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            {/* Add social media icons here */}
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <p>&copy; 2023 Performen. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;