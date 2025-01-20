import React, { useState } from 'react';
import {
    Box,
    Text,
    Textarea,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useColorModeValue,
    IconButton,
    HStack
} from '@chakra-ui/react';
import { FiEdit2 } from 'react-icons/fi';
import useAuthStore from '../stores/useAuthStore';

const EditableText = ({
    content,
    onSave,
    fontSize,
    fontWeight = "normal",
    color,
    textAlign = "left",
    as = "p",
    ...props
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(content);
    const isAdmin = useAuthStore((state) => state.isAdmin);
    const buttonBg = useColorModeValue('yellow.400', 'yellow.500');
    const buttonHoverBg = useColorModeValue('yellow.500', 'yellow.600');

    const handleSave = () => {
        onSave(editValue);
        setIsEditing(false);
    };

    return (
        <Box position="relative" display="inline-block">
            <Box display="inline-flex" alignItems="center" gap={4}>
                <Text
                    as={as}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    color={color}
                    textAlign={textAlign}
                    {...props}
                >
                    {content}
                </Text>
                {isAdmin && (
                    <IconButton
                        icon={<FiEdit2 />}
                        onClick={() => {
                            setEditValue(content);
                            setIsEditing(true);
                        }}
                        bg={buttonBg}
                        color="black"
                        _hover={{ bg: buttonHoverBg }}
                        size="sm"
                        aria-label="Edit text"
                    />
                )}
            </Box>

            <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
                <ModalOverlay />
                <ModalContent bg="white">
                    <ModalHeader color="gray.900">Edit Text</ModalHeader>
                    <ModalBody>
                        <Textarea
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            minH="200px"
                            color="gray.900"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <HStack spacing={4}>
                            <Button onClick={() => setIsEditing(false)} variant="ghost" color="gray.600">
                                Cancel
                            </Button>
                            <Button onClick={handleSave} bg={buttonBg} color="black" _hover={{ bg: buttonHoverBg }}>
                                Save
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default EditableText; 