import React, { useState } from 'react';
import { motion } from 'framer-motion';

const results = [
    {
        name: 'Will',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "J'ai réalisé que j'avais 30 ans et qu'avant d'être trop vieux, je devais arrêter de faire les choses à moitié. J'ai donc fait des recherches et...",
        age: 30,
        country: 'USA'
    },
    {
        name: 'Nils',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "Performen a transformé ma vie. Je suis passé d'un gars de 100kg qui jouait aux jeux vidéo toute la journée à un nouveau moi de 80kg.",
        age: 29,
        country: 'UK'
    },
    {
        name: 'BG',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "Soulever des poids m'a rendu paresseux avec mon alimentation. L'entraînement en calisthénie avec Performen m'a aidé à devenir plus mince en me concentrant sur la force du poids du corps.",
        age: null,
        country: 'Nouvelle-Zélande'
    },
    {
        name: 'Thomas',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "J'ai toujours été mince, mais je voulais gagner en muscle. Grâce à ce programme, j'ai pris 10kg de muscle en 6 mois.",
        age: 25,
        country: 'France'
    },
    {
        name: 'Luca',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "Je cherchais un moyen de rester en forme sans aller à la salle. Ce programme m'a permis de m'entraîner efficacement à la maison.",
        age: 32,
        country: 'Italie'
    },
    {
        name: 'Yuki',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "J'ai toujours admiré les athlètes de calisthénie. Grâce à ce programme, j'ai pu réaliser des mouvements que je pensais impossibles.",
        age: 27,
        country: 'Japon'
    },
    {
        name: 'Carlos',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "Après une blessure, je pensais ne plus pouvoir m'entraîner. Ce programme m'a aidé à me remettre en forme tout en respectant mes limites.",
        age: 35,
        country: 'Espagne'
    },
    {
        name: 'Olga',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "En tant que mère de deux enfants, je n'avais pas beaucoup de temps. Ce programme m'a permis de retrouver ma forme d'avant la grossesse.",
        age: 33,
        country: 'Russie'
    },
    {
        name: 'Ahmed',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "J'ai toujours eu du mal à prendre du poids. Ce programme m'a aidé à gagner en masse musculaire de manière saine.",
        age: 28,
        country: 'Égypte'
    },
    {
        name: 'Sophie',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "Je voulais améliorer ma posture et ma force. Grâce à ce programme, j'ai atteint mes objectifs et même plus encore.",
        age: 31,
        country: 'Canada'
    },
    {
        name: 'Lars',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "En tant que débutant complet, ce programme m'a fourni une base solide pour progresser en calisthénie.",
        age: 22,
        country: 'Suède'
    },
    {
        name: 'Maria',
        beforeImage: 'https://placehold.co/300x400',
        afterImage: 'https://placehold.co/300x400',
        description: "Je cherchais un défi physique. Ce programme m'a poussée à dépasser mes limites et à atteindre de nouveaux sommets.",
        age: 29,
        country: 'Brésil'
    }
];


const Results = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const resultsPerPage = 3;
    const totalPages = Math.ceil(results.length / resultsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const showPrevArrow = currentIndex > 0;
    const showNextArrow = currentIndex < totalPages - 1;

    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">RÉSULTATS</h2>
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex"
                        initial={false}
                        animate={{ x: `-${currentIndex * 100}%` }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        {results.map((result, index) => (
                            <div key={index} className="w-1/3 flex-shrink-0 px-4 flex">
                                <div className="bg-gray-950 rounded-lg overflow-hidden p-4 flex flex-col flex-1">
                                    <div className="flex justify-between mb-4 flex-shrink-0">
                                        <img src={result.beforeImage} alt="Avant" className="w-[48%] object-cover" />
                                        <img src={result.afterImage} alt="Après" className="w-[48%] object-cover" />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 text-yellow-500">{result.name}</h3>
                                    <div className="overflow-y-auto flex-grow">
                                        <p className="text-white text-sm mb-4 flex-grow">{result.description}</p>
                                    </div>
                                    <p className="text-yellow-500 text-sm">{result.age ? `${result.age} ans, ` : ''}{result.country}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="flex justify-center mt-8">
                    {showPrevArrow && (
                        <button
                            className="mx-2 text-yellow-500 text-4xl focus:outline-none"
                            onClick={prevSlide}
                        >
                            &#8592;
                        </button>
                    )}
                    {showNextArrow && (
                        <button
                            className="mx-2 text-yellow-500 text-4xl focus:outline-none"
                            onClick={nextSlide}
                        >
                            &#8594;
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Results;