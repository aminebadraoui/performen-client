import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: true,
    setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));

export default useAuthStore;