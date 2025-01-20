import React, { useState, useCallback } from 'react';
import useAuthStore from '../stores/useAuthStore';
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
    cloud: {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
    }
});

const EditableImage = ({
    content,
    onSave,
    className = ''
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(content);
    const [isUploading, setIsUploading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const isAdmin = useAuthStore((state) => state.isAdmin);

    console.log('EditableImage content:', content); // Debug log

    const hasValidImage = content && content.trim() !== '';

    const handleFile = async (file) => {
        if (!file || !file.type.startsWith('image/')) return;

        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

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

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        handleFile(file);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        handleFile(file);
    };

    const ImagePlaceholder = () => (
        <div className={`bg-[#1a1f2e] w-full h-full flex items-center justify-center ${className}`}>
            <div className="text-[#4a5568] text-sm">+</div>
        </div>
    );

    // Non-admin view
    if (!isAdmin) {
        return hasValidImage ? (
            <img src={content} alt="" className={`w-full h-full object-cover ${className}`} />
        ) : (
            <ImagePlaceholder />
        );
    }

    // Admin view
    return (
        <div className="relative h-full">
            {hasValidImage ? (
                <img src={content} alt="" className={`w-full h-full object-cover ${className}`} />
            ) : (
                <div className="relative h-full">
                    <ImagePlaceholder />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
                        >
                            Add Image
                        </button>
                    </div>
                </div>
            )}
            {isEditing && (
                <div className="fixed inset-0 z-[100] bg-black bg-opacity-75 flex items-center justify-center p-8">
                    <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {hasValidImage ? 'Edit Image' : 'Add Image'}
                            </h3>
                            <div
                                className={`relative border-4 border-dashed rounded-xl transition-colors ${isDragging ? 'border-yellow-500 bg-yellow-50' : 'border-gray-300 hover:border-yellow-300'}`}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                            >
                                <div className="p-8 flex flex-col items-center">
                                    {value ? (
                                        <img
                                            src={value}
                                            alt=""
                                            className="max-h-[50vh] object-contain mb-8"
                                        />
                                    ) : (
                                        <div className="w-full aspect-video bg-gray-100 flex flex-col items-center justify-center mb-8 rounded-lg">
                                            <div className="text-6xl text-gray-400 mb-4 font-light">+</div>
                                            <div className="text-gray-400 text-xl">No image selected</div>
                                        </div>
                                    )}
                                    <div className="text-center">
                                        <label className="cursor-pointer inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors">
                                            Choose Image
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                                disabled={isUploading}
                                            />
                                        </label>
                                        <p className="mt-4 text-base text-gray-600">
                                            or drag and drop an image here
                                        </p>
                                    </div>
                                </div>
                                {isUploading && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                                        <div className="text-yellow-500 text-xl font-semibold">Uploading...</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="bg-gray-50 px-8 py-4 rounded-b-xl flex justify-end gap-4">
                            <button
                                onClick={() => {
                                    setValue(content);
                                    setIsEditing(false);
                                }}
                                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditableImage; 