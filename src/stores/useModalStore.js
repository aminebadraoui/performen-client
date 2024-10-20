import { create } from 'zustand';

const useModalStore = create((set) => ({
    isCalendlyOpen: false,
    openCalendly: () => set({ isCalendlyOpen: true }),
    closeCalendly: () => set({ isCalendlyOpen: false }),
}));

export default useModalStore;