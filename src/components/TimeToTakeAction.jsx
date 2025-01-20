import React from 'react';
import { Box, Container, VStack, Button } from '@chakra-ui/react';
import GridPattern from './GridPattern';
import useModalStore from '../stores/useModalStore';
import useContentStore from '../stores/useContentStore';
import EditableText from './EditableText';

const TimeToTakeAction = () => {
    const { openCalendly } = useModalStore();
    const { content, updateContent } = useContentStore();
    const pageContent = content?.pages?.landing;

    const handleContentSave = (field, value) => {
        updateContent('landing', 'action', field, value);
    };

    if (!pageContent?.action) {
        return null;
    }

    return (
        <Box bg="black" position="relative" overflow="hidden">
            <GridPattern
                size="6px"
                opacity={0.1}
                dotSize="1px"
                sx={{
                    '&::after': {
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 30%, transparent 70%, rgba(0,0,0,0.8))'
                    }
                }}
            />
            <Container maxW="container.xl" py={20} position="relative">
                <VStack spacing={8} textAlign="center">
                    <EditableText
                        content={pageContent.action.title}
                        onSave={(value) => handleContentSave('title', value)}
                        fontSize="5xl"
                        fontWeight="bold"
                        color="yellow.400"
                    />
                    <EditableText
                        content={pageContent.action.subtitle}
                        onSave={(value) => handleContentSave('subtitle', value)}
                        fontSize="xl"
                        color="white"
                        maxW="2xl"
                    />
                    <Button
                        size="lg"
                        bg="yellow.400"
                        color="black"
                        px={8}
                        py={6}
                        fontSize="lg"
                        _hover={{
                            bg: 'yellow.500'
                        }}
                        onClick={openCalendly}
                    >
                        {pageContent.action.cta_label}
                    </Button>
                </VStack>
            </Container>
        </Box>
    );
};

export default TimeToTakeAction;