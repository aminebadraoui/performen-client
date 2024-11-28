import React from 'react';
import { motion, useInView } from 'framer-motion';

const WhoAmI = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    return (
        <div className="bg-white">
            <section ref={ref} className="container bg-white mx-auto px-6 py-12 relative">
                <h2 className="text-4xl font-bold text-center mb-12 text-yellow-500">QUI SOMMES-NOUS ?</h2>

                <div className="flex flex-col space-y-16">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <motion.div
                            className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-bold mb-6 text-yellow-500">Aiden Anis</h3>
                            <p className="text-lg text-gray-950">
                                Je m'appelle Aiden Anis et je suis pratiquant de fitness depuis l'âge de 13 ans.
                                Issu d'une famille de médecins, j'ai rapidement découvert l'importance de l'entraînement physique dans la santé globale.
                                Mon parcours m'a mené à Paris pour étudier la nutrition, puis à Montréal, où j'ai obtenu ma certification de coach sportif.
                            </p>
                            <br />
                            <p className="text-lg text-gray-950">
                                Au fil des ans, j'ai eu l'opportunité de travailler dans des environnements dynamiques tels que World Gym Québec et Elite Coaching,
                                en plus de mon expérience comme coach travailleur autonome.
                                J'ai eu la chance de guider plus d'une centaine de personnes — hommes, femmes et adolescents —
                                et de travailler avec des athlètes que j'ai aidés à atteindre leurs objectifs de compétition.
                            </p>
                            <br />
                            <p className="text-lg text-gray-950">
                                Mais au-delà de ces expériences, j'ai trouvé ma véritable mission dans la perte de poids pour les hommes.
                                Mon approche allie santé holistique et transformation physique pour libérer le potentiel de
                                changement d'identité qui accompagne chaque parcours de remise en forme.
                                Mon objectif est de vous aider à non seulement perdre du poids,
                                mais aussi à transformer votre vie en alignant votre corps et votre esprit.
                            </p>
                        </motion.div>
                        <motion.div
                            className="w-full md:w-1/2 relative"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute inset-0 custom-gradient z-10"></div>
                            <img
                                src="/assets/Anis-Rings.jpg"
                                alt="Anis sur les anneaux"
                                className="w-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* <div className="flex flex-col md:flex-row-reverse items-center justify-between">
                    <motion.div
                        className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-bold mb-6 text-yellow-500">Aiden Anis</h3>
                        <p className="text-lg">
                            Je m'appelle Aiden Anis et je suis pratiquant de fitness depuis l'âge de 13 ans.
                            Issu d'une famille de médecins, j'ai rapidement découvert l'importance de l'entraînement physique dans la santé globale.
                            Mon parcours m'a mené à Paris pour étudier la nutrition, puis à Montréal, où j'ai obtenu ma certification de coach sportif.
                        </p>
                        <br />
                        <p className="text-lg">
                            Au fil des ans, j'ai eu l'opportunité de travailler dans des environnements dynamiques tels que World Gym Québec et Elite Coaching,
                            en plus de mon expérience comme coach travailleur autonome.
                            J'ai eu la chance de guider plus d'une centaine de personnes — hommes, femmes et adolescents —
                            et de travailler avec des athlètes que j'ai aidés à atteindre leurs objectifs de compétition.
                        </p>
                        <br />
                        <p className="text-lg">
                            Mais au-delà de ces expériences, j'ai trouvé ma véritable mission dans la perte de poids pour les hommes.
                            Mon approche allie santé holistique et transformation physique pour libérer le potentiel de
                            changement d'identité qui accompagne chaque parcours de remise en forme.
                            Mon objectif est de vous aider à non seulement perdre du poids,
                            mais aussi à transformer votre vie en alignant votre corps et votre esprit.
                        </p>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 relative"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 custom-gradient z-10"></div>
                        <img
                            src="/assets/Anis-Rings.jpg"
                            alt="Anis sur les anneaux"
                            className="w-full object-cover"
                        />
                    </motion.div>
                </div> */}
                </div>
            </section>
        </div>
    );
};

export default WhoAmI;