import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

const LandingPage = () => {
    const navigate = useNavigate();
    const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Bienvenue sur Performen</h1>

        </div>
    );
};

export default LandingPage;