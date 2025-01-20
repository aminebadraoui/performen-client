import React, { useState, useCallback } from 'react';
import {
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Image,
    VStack,
    Text,
    useColorModeValue,
    IconButton,
    Center,
    Input,
    HStack
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FiEdit2 } from 'react-icons/fi';
import useAuthStore from '../stores/useAuthStore';

const ImagePlaceholder = ({ onClick, isDragging, isAdmin }) => {
    const bgColor = useColorModeValue('gray.100', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const iconColor = useColorModeValue('gray.400', 'gray.600');

    return (
        <Box
            w="full"
            h="full"
            bg={bgColor}
            borderWidth={2}
            borderStyle="dashed"
            borderColor={isDragging ? 'yellow.500' : borderColor}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            transition="all 0.2s"
            cursor={isAdmin ? "pointer" : "default"}
            onClick={isAdmin ? onClick : undefined}
        >
            <Text fontSize="4xl" color={iconColor}>+</Text>
        </Box>
    );
};

const EditableImage = ({
    content,
    onSave,
    objectFit = "cover",
    ...props
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(content);
    const [isUploading, setIsUploading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const isAdmin = useAuthStore((state) => state.isAdmin);

    const buttonBg = useColorModeValue('yellow.400', 'yellow.500');
    const buttonHoverBg = useColorModeValue('yellow.500', 'yellow.600');
    const placeholderBg = useColorModeValue('gray.100', 'gray.700');
    const defaultBorderColor = useColorModeValue('gray.200', 'gray.600');
    const borderColor = isDragging ? buttonBg : defaultBorderColor;

    const hasValidImage = content && content.trim() !== '';

    const handleFile = async (file) => {
        if (!file || !file.type.startsWith('image/')) return;

        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'performen');

            const response = await fetch(
                'https://api.cloudinary.com/v1_1/dqvdgvqli/image/upload',
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
        if (file && file.type.startsWith('image/')) {
            handleFile(file);
        }
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                handleFile(file);
            }
        };
        input.click();
    };

    // Non-admin view
    if (!isAdmin) {
        return hasValidImage ? (
            <Image src={content} alt="" objectFit={objectFit} {...props} />
        ) : (
            <ImagePlaceholder
                onClick={handleImageUpload}
                isDragging={isDragging}
                isAdmin={isAdmin}
            />
        );
    }

    // Admin view
    return (
        <Box position="relative" h="full">
            {hasValidImage ? (
                <Box position="relative">
                    <Image src={content} alt="" objectFit={objectFit} {...props} />
                    <IconButton
                        icon={<FiEdit2 />}
                        position="absolute"
                        top={4}
                        right={4}
                        onClick={handleImageUpload}
                        bg={buttonBg}
                        color="black"
                        _hover={{ bg: buttonHoverBg }}
                        size="sm"
                        aria-label="Edit image"
                    />
                </Box>
            ) : (
                <ImagePlaceholder
                    onClick={handleImageUpload}
                    isDragging={isDragging}
                    isAdmin={isAdmin}
                />
            )}

            <Modal isOpen={isEditing} onClose={() => setIsEditing(false)} size="2xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {hasValidImage ? 'Edit Image' : 'Add Image'}
                    </ModalHeader>
                    <ModalBody>
                        <Box
                            borderWidth={2}
                            borderStyle="dashed"
                            borderColor={borderColor}
                            borderRadius="xl"
                            transition="all 0.2s"
                            _hover={{ borderColor: buttonBg }}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            position="relative"
                            p={8}
                        >
                            <VStack spacing={6}>
                                {value ? (
                                    <Image
                                        src={value}
                                        alt=""
                                        maxH="400px"
                                        objectFit="contain"
                                    />
                                ) : (
                                    <Center
                                        w="full"
                                        h="300px"
                                        bg={placeholderBg}
                                        borderRadius="lg"
                                    >
                                        <VStack spacing={4}>
                                            <AddIcon boxSize={12} color="gray.400" />
                                            <Text color="gray.500">No image selected</Text>
                                        </VStack>
                                    </Center>
                                )}
                                <VStack spacing={2}>
                                    <Button
                                        as="label"
                                        cursor="pointer"
                                        bg={buttonBg}
                                        color="black"
                                        _hover={{ bg: buttonHoverBg }}
                                        px={8}
                                    >
                                        Choose Image
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            hidden
                                            disabled={isUploading}
                                        />
                                    </Button>
                                    <Text fontSize="sm" color="gray.500">
                                        or drag and drop an image here
                                    </Text>
                                </VStack>
                            </VStack>
                            {isUploading && (
                                <Center
                                    position="absolute"
                                    inset={0}
                                    bg="blackAlpha.600"
                                    borderRadius="xl"
                                >
                                    <Text color="white" fontWeight="semibold">
                                        Uploading...
                                    </Text>
                                </Center>
                            )}
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <HStack spacing={4}>
                            <Button
                                onClick={() => {
                                    setValue(content);
                                    setIsEditing(false);
                                }}
                                variant="ghost"
                            >
                                Cancel
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default EditableImage; 