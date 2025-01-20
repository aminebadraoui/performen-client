import React from 'react';
import { Box, Container, VStack, HStack } from '@chakra-ui/react';
import useContentStore from '../stores/useContentStore';
import EditableText from './EditableText';
import EditableImage from './EditableImage';

const WhoAmI = () => {
    const { content, updateContent } = useContentStore();
    const pageContent = content?.pages?.landing;

    console.log('WhoAmI content:', pageContent?.whoami);

    const handleContentSave = (field, value) => {
        updateContent('landing', 'whoami', field, value);
    };

    if (!pageContent?.whoami) {
        return null;
    }

    return (
        <Box as="section" py={{ base: 16, md: 24 }} bg="white">
            <Container maxW="container.xl" px={6}>
                <HStack spacing={12} align="center">
                    <Box flex={1}>
                        <VStack align="start" spacing={6}>
                            <EditableText
                                content={pageContent.whoami.title}
                                onSave={(value) => handleContentSave('title', value)}
                                fontSize="5xl"
                                fontWeight="bold"
                                color="gray.900"
                                as="h2"
                            />
                            <EditableText
                                content={pageContent.whoami.name}
                                onSave={(value) => handleContentSave('name', value)}
                                fontSize="4xl"
                                fontWeight="bold"
                                color="gray.800"
                            />
                            <EditableText
                                content={pageContent.whoami.description}
                                onSave={(value) => handleContentSave('description', value)}
                                fontSize="xl"
                                color="gray.700"
                                whiteSpace="pre-wrap"
                            />
                        </VStack>
                    </Box>
                    <Box flex={1} h="full" aspectRatio={4 / 3}>
                        <EditableImage
                            content={pageContent.whoami.image}
                            onSave={(value) => handleContentSave('image', value)}
                            objectFit="cover"
                            w="full"
                            h="full"
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