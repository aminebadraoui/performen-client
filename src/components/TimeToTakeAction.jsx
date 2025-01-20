import React from 'react';
import { Box, Container, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import useModalStore from '../stores/useModalStore';
import useContentStore from '../stores/useContentStore';
import EditableText from './EditableText';

const TimeToTakeAction = () => {
    const { openCalendly } = useModalStore();
    const { content, updateContent } = useContentStore();
    const pageContent = content.pages.landing;
    const buttonBg = useColorModeValue('yellow.400', 'yellow.500');
    const buttonHoverBg = useColorModeValue('yellow.500', 'yellow.600');

    const handleContentSave = (field, value) => {
        updateContent('landing', 'cta', field, value);
    };

    return (
        <Box as="section" bg="black" py={{ base: 16, md: 24 }}>
            <Container maxW="container.xl" px={6}>
                <VStack spacing={8} align="center">
                    <EditableText
                        content={pageContent.cta.title}
                        onSave={(value) => handleContentSave('title', value)}
                        fontSize="4xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                        as="h2"
                    />
                    <EditableText
                        content={pageContent.cta.subtitle}
                        onSave={(value) => handleContentSave('subtitle', value)}
                        fontSize="xl"
                        color="gray.300"
                        textAlign="center"
                    />
                    <Box position="relative" display="inline-block">
                        <Box display="inline-flex" alignItems="center" gap={4}>
                            <Button
                                onClick={openCalendly}
                                bg={buttonBg}
                                color="black"
                                px={8}
                                py={6}
                                fontSize="xl"
                                fontWeight="semibold"
                                _hover={{ bg: buttonHoverBg }}
                            >
                                {pageContent.cta.button_label}
                            </Button>
                            <EditableText
                                content={pageContent.cta.button_label}
                                onSave={(value) => handleContentSave('button_label', value)}
                                display="none"
                            />
                        </Box>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default TimeToTakeAction;