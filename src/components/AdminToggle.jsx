import React from 'react';
import useAuthStore from '../stores/useAuthStore';

const AdminToggle = () => {
    const isAdmin = useAuthStore((state) => state.isAdmin);
    const setIsAdmin = useAuthStore((state) => state.setIsAdmin);

    return (
        <button
            onClick={() => setIsAdmin(!isAdmin)}
            className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${isAdmin
                ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                : 'bg-gray-700 text-white hover:bg-gray-800'
                }`}
        >
            {isAdmin ? 'Disable Editing' : 'Enable Editing'}
        </button>
    );
};

export default AdminToggle; 