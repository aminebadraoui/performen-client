import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));

export default useAuthStore;