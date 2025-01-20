import React from 'react';
import { Box, Container, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import useContentStore from '../stores/useContentStore';
import EditableText from './EditableText';
import EditableImage from './EditableImage';

const WhoAmI = () => {
    const { content, updateContent } = useContentStore();
    const pageContent = content.pages.landing;
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const textColor = useColorModeValue('gray.900', 'gray.100');

    const handleContentSave = (field, value) => {
        updateContent('landing', 'whoami', field, value);
    };

    return (
        <Box as="section" bg={bgColor} py={{ base: 16, md: 24 }}>
            <Container maxW="container.xl" px={6}>
                <HStack spacing={12} align="center" justify="space-between">
                    <VStack flex={1} align="start" spacing={6}>
                        <EditableText
                            content={pageContent.whoami.title}
                            onSave={(value) => handleContentSave('title', value)}
                            fontSize="4xl"
                            fontWeight="bold"
                            color={textColor}
                            as="h2"
                        />
                        <EditableText
                            content={pageContent.whoami.content}
                            onSave={(value) => handleContentSave('content', value)}
                            fontSize="lg"
                            color={textColor}
                            whiteSpace="pre-wrap"
                        />
                    </VStack>
                    <Box flex={1} maxW="400px" position="relative">
                        <EditableImage
                            content={pageContent.whoami.image}
                            onSave={(value) => handleContentSave('image', value)}
                            objectFit="cover"
                            w="full"
                            aspectRatio={4 / 3}
                            borderRadius="xl"
                            boxShadow="xl"
                        />
                    </Box>
                </HStack>
            </Container>
        </Box>
    );
};

export default WhoAmI;