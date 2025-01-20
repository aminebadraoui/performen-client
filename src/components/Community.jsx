import React, { useState } from 'react';
import { Box, Container, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import useModalStore from '../stores/useModalStore';
import useContentStore from '../stores/useContentStore';
import EditableText from './EditableText';
import SkoolComponent from './SkoolComponent';

const Community = () => {
    const { openCalendly } = useModalStore();
    const { content, updateContent } = useContentStore();
    const buttonBg = useColorModeValue('yellow.400', 'yellow.500');
    const buttonHoverBg = useColorModeValue('yellow.500', 'yellow.600');
    const pageContent = content.pages.landing;

    const handleContentSave = (field, value) => {
        updateContent('landing', 'community', field, value);
    };

    return (
        <Box as="section" py={{ base: 16, md: 24 }}>
            <Container maxW="container.xl" px={6}>
                <VStack spacing={12}>
                    <EditableText
                        content={pageContent.community.title}
                        onSave={(value) => handleContentSave('title', value)}
                        fontSize="4xl"
                        fontWeight="bold"
                        color="yellow.400"
                        textAlign="center"
                    />
                    <EditableText
                        content={pageContent.community.subtitle}
                        onSave={(value) => handleContentSave('subtitle', value)}
                        fontSize="xl"
                        color="white"
                        textAlign="center"
                        maxW="3xl"
                    />
                    <SkoolComponent />
                </VStack>
            </Container>
        </Box>
    );
};

export default Community;