import React from 'react';
import useAuthStore from '../stores/useAuthStore';

const AdminToggle = () => {
    const { isAdmin, setIsAdmin } = useAuthStore();

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={() => setIsAdmin(!isAdmin)}
                className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${isAdmin
                    ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                    : 'bg-gray-700 text-white hover:bg-gray-800'
                    }`}
            >
                {isAdmin ? 'Disable Editing' : 'Enable Editing'}
            </button>
        </div>
    );
};

export default AdminToggle; 