import React, { useState } from 'react';
import useAuthStore from '../stores/useAuthStore';
import { motion } from 'framer-motion';
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
    }
});

const EditableContent = ({
    content,
    onSave,
    type = 'text',
    className = '',
    motionProps = {}
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(content);
    const [isUploading, setIsUploading] = useState(false);
    const { isAdmin } = useAuthStore();

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setIsUploading(true);
        try {
            // Create form data
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

            // Upload to Cloudinary
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await response.json();
            setValue(data.secure_url);
            onSave(data.secure_url);
            setIsEditing(false);
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleSave = () => {
        onSave(value);
        setIsEditing(false);
    };

    if (!isAdmin) {
        return type === 'image' ? (
            <img src={content} alt="" className={className} />
        ) : (
            <motion.div className={className} {...motionProps}>{content}</motion.div>
        );
    }

    if (!isEditing) {
        return (
            <div
                className="relative group"
                onDoubleClick={() => setIsEditing(true)}
            >
                {type === 'image' ? (
                    <img src={content} alt="" className={className} />
                ) : (
                    <motion.div className={className} {...motionProps}>{content}</motion.div>
                )}
                <button
                    onClick={() => setIsEditing(true)}
                    className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    Edit
                </button>
            </div>
        );
    }

    return (
        <div className="relative">
            {type === 'image' ? (
                <div className="flex flex-col gap-4">
                    <img src={value} alt="" className={className} />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-2"
                        disabled={isUploading}
                    />
                    {isUploading && (
                        <div className="text-yellow-500">Uploading...</div>
                    )}
                </div>
            ) : (
                <textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full p-2 text-black min-h-[100px]"
                />
            )}
            <div className="flex gap-2 mt-2">
                {!isUploading && type !== 'image' && (
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Save
                    </button>
                )}
                <button
                    onClick={() => {
                        setValue(content);
                        setIsEditing(false);
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditableContent; 