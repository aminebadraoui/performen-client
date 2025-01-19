const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const contentService = {
    async saveContent(content) {
        const response = await fetch(`${API_URL}/content`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(content)
        });
        return response.json();
    },

    async loadContent() {
        const response = await fetch(`${API_URL}/content`);
        return response.json();
    }
}; 