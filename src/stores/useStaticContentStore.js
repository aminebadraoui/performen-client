import { create } from 'zustand';
import directus from '../services/directus';

const useStaticContentStore = create((set) => ({
    staticContent: null,
    loading: false,
    error: null,

    fetchStaticContent: async (collection, params) => {
        try {
            set({ loading: true });
            // Using the correct SDK method
            const response = await directus.request(
                directus.items(collection).readOne(params)
            );

            console.log(response);
            set({
                staticContent: response,
                loading: false
            });
        } catch (error) {
            console.log(error);
            set({
                error: error.message,
                loading: false
            });
        }
    },
}));

export default useStaticContentStore;