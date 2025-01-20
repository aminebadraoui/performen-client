import React, { useState } from 'react';
import useAuthStore from '../stores/useAuthStore';
import { motion } from 'framer-motion';

const EditableText = ({
    content,
    onSave,
    className = '',
    motionProps = {}
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(content);
    const isAdmin = useAuthStore((state) => state.isAdmin);

    const handleSave = () => {
        onSave(value);
        setIsEditing(false);
    };

    // Non-admin view
    if (!isAdmin) {
        return motionProps ? (
            <motion.div className={className} {...motionProps}>{content}</motion.div>
        ) : (
            <div className={className}>{content}</div>
        );
    }

    // Admin view - not editing
    if (!isEditing) {
        return (
            <div className="relative group">
                <motion.div className={className} {...motionProps}>{content}</motion.div>
                <button
                    onClick={() => setIsEditing(true)}
                    className="absolute top-0 right-0 bg-yellow-500 text-black px-4 py-2 rounded-lg text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-yellow-600"
                >
                    Edit
                </button>
            </div>
        );
    }

    // Admin view - editing
    return (
        <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-2 text-gray-900 min-h-[100px] border rounded"
            />
            <div className="flex gap-2 mt-2">
                <button
                    onClick={handleSave}
                    className="bg-yellow-500 text-black px-6 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
                >
                    Save
                </button>
                <button
                    onClick={() => {
                        setValue(content);
                        setIsEditing(false);
                    }}
                    className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditableText; 