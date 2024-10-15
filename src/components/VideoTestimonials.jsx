import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: '1',
        name: 'Jean Dupont',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: '2',
        name: 'Marie Martin',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    // Add more testimonials here
];

const VideoTestimonials = () => {
    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Témoignages Vidéo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            className="bg-gray-950 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    src={testimonial.videoUrl}
                                    title={`Témoignage de ${testimonial.name}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;