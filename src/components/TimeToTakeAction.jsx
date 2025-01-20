import React from 'react';
import { Box, Container, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import useModalStore from '../stores/useModalStore';
import useContentStore from '../stores/useContentStore';
import EditableText from './EditableText';

const TimeToTakeAction = () => {
    const { openCalendly } = useModalStore();
    const { content, updateContent } = useContentStore();
    const pageContent = content?.pages?.landing;
    const buttonBg = useColorModeValue('black', 'black');
    const buttonHoverBg = useColorModeValue('gray.800', 'gray.800');

    const handleContentSave = (field, value) => {
        updateContent('landing', 'action', field, value);
    };

    if (!pageContent?.action) {
        return null;
    }

    return (
        <Box as="section" py={{ base: 16, md: 24 }}>
            <Container maxW="container.xl" px={6}>
                <VStack spacing={8}>
                    <EditableText
                        content={pageContent.action.title}
                        onSave={(value) => handleContentSave('title', value)}
                        fontSize="4xl"
                        fontWeight="bold"
                        color="black"
                        textAlign="center"
                    />
                    <EditableText
                        content={pageContent.action.subtitle}
                        onSave={(value) => handleContentSave('subtitle', value)}
                        fontSize="xl"
                        color="gray.700"
                        textAlign="center"
                        maxW="3xl"
                    />
                    <Button
                        onClick={openCalendly}
                        bg={buttonBg}
                        color="white"
                        px={8}
                        py={6}
                        fontSize="xl"
                        fontWeight="semibold"
                        _hover={{ bg: buttonHoverBg }}
                    >
                        {pageContent.action.cta_label}
                    </Button>
                </VStack>
            </Container>
        </Box>
    );
};

export default TimeToTakeAction;