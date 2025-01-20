import { create } from 'zustand';

const useAuthStore = create((set) => ({
    // For under construction page unlock
    isUnlocked: false,
    setIsUnlocked: (value) => set({ isUnlocked: value }),

    // For admin editing functionality
    isAdmin: false,
    setIsAdmin: (value) => {
        console.log('Setting isAdmin in store to:', value);
        set((state) => {
            console.log('Previous state:', state);
            const newState = { ...state, isAdmin: value };
            console.log('New state:', newState);
            return newState;
        });
    },
}));

export default useAuthStore;