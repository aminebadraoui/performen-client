import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import directus from '../services/directus';
import { motion } from 'framer-motion';
import { createDirectus, graphql, staticToken } from '@directus/sdk';
import useModalStore from '../stores/useModalStore';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const directus = createDirectus('https://performen-dashboard.mnfstagency.com')
        .with(graphql())
        .with(staticToken('Zwr4a6GH6F5pwhCGW1CcbNFVs-uIM7R6'));

    const [headerContent, setHeaderContent] = useState(null);
    const { isCalendlyOpen, openCalendly, closeCalendly } = useModalStore();

    useEffect(() => {
        const getHeaderContent = async () => {
            try {
                const response = await directus.query(`
                    query {
                        header_by_id(id: 1) {
                           id
                           logo_image {
                             id
                             filename_disk
                             filename_download
                           }
                           links 
                           logo_text
                           cta_label
                           cta_url
                        }
                    }
                `);

                console.log('response', response);

                if (response.header_by_id) {
                    setHeaderContent(response.header_by_id);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        getHeaderContent();
    }, []);

    return (
        <header className="bg-black py-4 px-4 sm:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
                {headerContent?.logo_image && (
                    <img
                        src={`https://performen-dashboard.mnfstagency.com/assets/${headerContent.logo_image.filename_disk}`}
                        alt="Logo Performen"
                        className="h-16 md:h-20 mb-4 md:mb-0 cursor-pointer"

                        loading="eager"
                        onError={(e) => {
                            console.error('Error loading image:', e);
                            console.log('Image source:', e.target.src);
                        }}
                        onClick={() => {
                            navigate('/');
                        }}
                    />
                )}
                <nav className="mb-4 md:mb-0">
                    <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-8">
                        {headerContent?.links?.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.link_url || '/'}
                                    className="hover:text-yellow-500 text-white"
                                >
                                    {link.link_text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <motion.button
                    className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openCalendly}
                >
                    {headerContent?.cta_label || 'Réserve ta consultation'}
                </motion.button>
            </div>
        </header>
    );
};

export default Header;