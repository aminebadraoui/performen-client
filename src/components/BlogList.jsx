import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useBlogStore from '../stores/useBlogStore';
import { useNavigate } from 'react-router-dom';

const BlogList = () => {
    const navigate = useNavigate();
    const { posts, loading, error, fetchPosts } = useBlogStore();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-12 text-yellow-500">Blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => {
                                navigate(`/blog/${post.slug}`);
                            }}
                        >
                            {post.featured_image && (
                                <img
                                    src={`https://performen-dashboard.mnfstagency.com/assets/${post.featured_image.filename_disk}`}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-4 text-yellow-500">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                                <div className="text-sm text-gray-400">
                                    {new Date(post.date_created).toLocaleDateString()}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogList;