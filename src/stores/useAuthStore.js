import { create } from 'zustand';

const useAuthStore = create((set) => ({
    // For under construction page unlock
    isUnlocked: false,
    setIsUnlocked: (value) => set({ isUnlocked: value }),

    // For admin editing functionality
    isAdmin: false,
    setIsAdmin: (value) => set({ isAdmin: value }),
}));

export default useAuthStore;