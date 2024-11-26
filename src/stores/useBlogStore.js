import { create } from 'zustand';
import { createDirectus, graphql, staticToken } from '@directus/sdk';

const directus = createDirectus('https://performen-dashboard.mnfstagency.com')
    .with(graphql())
    .with(staticToken('Zwr4a6GH6F5pwhCGW1CcbNFVs-uIM7R6'));

const useBlogStore = create((set) => ({
    posts: [],
    currentPost: null,
    loading: false,
    error: null,

    fetchPosts: async () => {
        try {
            set({ loading: true });
            const response = await directus.query(`
                query {
                    blog_posts {
                        id
                        title
                        slug
                        featured_image {
                            id
                            filename_disk
                        }
                   
                        status
                        date_created
                        show_featured_image
                    }
                }
            `);

            set({
                posts: response.blog_posts.filter(post => post.status === 'published'),
                loading: false
            });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    fetchPostBySlug: async (slug) => {
        try {
            set({ loading: true });
            const response = await directus.query(`
                query {
                    blog_posts(filter: { slug: { _eq: "${slug}" } }) {
                        id
                        title
                        slug
                        content
                        featured_image {
                            id
                            filename_disk
                        }
                        date_created
                        status
                        show_featured_image
                    }
                }
            `);

            const post = response.blog_posts[0];
            set({
                currentPost: post && post.status === 'published' ? post : null,
                loading: false
            });
        } catch (error) {
            console.error('Error fetching post:', error);
            set({ error: error.message, loading: false });
        }
    }
}));

export default useBlogStore;