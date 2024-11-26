import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useBlogStore from '../stores/useBlogStore';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { currentPost, loading, error, fetchPostBySlug } = useBlogStore();

    useEffect(() => {
        if (slug) {
            fetchPostBySlug(slug);
        }
    }, [slug, fetchPostBySlug]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;
    if (!currentPost) {
        return <div className="text-center">Post not found</div>;
    }

    return (
        <motion.article
            className="bg-black min-h-screen py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="container mx-auto px-6">
                {currentPost.featured_image && currentPost.show_featured_image && (
                    <img
                        src={`https://performen-dashboard.mnfstagency.com/assets/${currentPost.featured_image.filename_disk}`}
                        alt={currentPost.title}
                        className="w-full h-96 object-cover rounded-lg mb-8"
                    />
                )}
                <h1 className="text-4xl font-bold mb-8 text-yellow-500">{currentPost.title}</h1>
                <div className="text-sm text-gray-400 mb-8">
                    {new Date(currentPost.date_created).toLocaleDateString()}
                </div>
                <div
                    className="prose prose-lg prose-invert max-w-none text-white"
                    dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />
            </div>
        </motion.article>
    );
};

export default BlogPost;