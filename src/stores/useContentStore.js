import { create } from 'zustand';

// Default content that ships with the app
const defaultContent = {
    pages: {
        landing: {
            hero: {
                title: "Welcome to Performen",
                subtitle: "Your journey to peak performance starts here",
                image: "https://performen-dashboard.mnfstagency.com/assets/your-image.jpg",
                cta_label: "Get Started"
            },
            whoami: {
                title: "QUI SOMMES-NOUS ?",
                name: "Aiden Anis",
                description: "Je m'appelle Aiden Anis et je suis pratiquant de fitness depuis l'âge de 13 ans. Issu d'une famille de médecins, j'ai rapidement découvert l'importance de l'entraînement physique dans la santé globale. Mon parcours m'a mené à Paris pour étudier la nutrition, puis à Montréal, où j'ai obtenu ma certification de coach sportif.\n\nAu fil des ans, j'ai eu l'opportunité de travailler dans des environnements dynamiques tels que World Gym Québec et Elite Coaching, en plus de mon expérience comme coach travailleur autonome. J'ai eu la chance de guider plus d'une centaine de personnes — hommes, femmes et adolescents — et de travailler avec des athlètes que j'ai aidés à atteindre leurs objectifs de compétition.\n\nMais au-delà de ces expériences, j'ai trouvé ma véritable mission dans la perte de poids pour les hommes. Mon approche allie santé holistique et transformation physique pour libérer le potentiel de changement d'identité qui accompagne chaque parcours de remise en forme. Mon objectif est de vous aider à non seulement perdre du poids, mais aussi à transformer votre vie en alignant votre corps et votre esprit.",
                image: "/assets/Anis-Rings.jpg"
            },
            action: {
                title: "Il est temps d'agir",
                subtitle: "Ne laisse pas passer cette opportunité de transformer ta vie. Commence ton voyage vers une meilleure version de toi dès aujourd'hui.",
                cta_label: "Réserve ta consultation"
            },
            community: {
                title: "Rejoins La Confrérie",
                subtitle: "Confrérie visant la perte de poids et la perfection de l'être. Rejoins une communauté d'hommes déterminés à transformer leur vie."
            }
        }
    }
};

const useContentStore = create((set, get) => ({
    content: defaultContent,
    isLoading: true,
    error: null,

    // Load content from external source if available
    loadContent: async () => {
        set({ isLoading: true });
        try {
            // Try to load from external content.json
            const response = await fetch('/content.json');
            if (!response.ok) {
                throw new Error('Content file not found');
            }
            const content = await response.json();
            set({ content, isLoading: false, error: null });
        } catch (error) {
            console.log('Using default content:', error);
            // If external content fails, use default content
            set({ content: defaultContent, isLoading: false, error: null });
        }
    },

    // Update content section
    updateContent: async (page, section, field, value) => {
        const currentContent = get().content || defaultContent;
        const newContent = {
            ...currentContent,
            pages: {
                ...currentContent.pages,
                [page]: {
                    ...currentContent.pages[page],
                    [section]: {
                        ...currentContent.pages[page][section],
                        [field]: value
                    }
                }
            }
        };

        // Update local state immediately
        set({ content: newContent });

        // Log the full content object for easy copying
        console.log('Updated content:');
        console.log(JSON.stringify(newContent, null, 2));
        console.log('\nTo update the content:');
        console.log('1. SSH into your server');
        console.log('2. Navigate to the content volume:');
        console.log('   docker volume inspect performen_content');
        console.log('3. Update content.json with the above content');
    }
}));

export default useContentStore; 