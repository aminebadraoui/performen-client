import React from 'react';
import { Box, Container, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import useModalStore from '../stores/useModalStore';
import useContentStore from '../stores/useContentStore';
import EditableText from './EditableText';
import GridPattern from './GridPattern';
import SkoolComponent from './SkoolComponent';

const Community = () => {
    const { openCalendly } = useModalStore();
    const { content, updateContent } = useContentStore();
    const pageContent = content?.pages?.landing;
    const buttonBg = useColorModeValue('yellow.400', 'yellow.400');
    const buttonHoverBg = useColorModeValue('yellow.500', 'yellow.500');

    const handleContentSave = (field, value) => {
        updateContent('landing', 'community', field, value);
    };

    return (
        <Box
            as="section"
            bg="black"
            color="white"
            py={20}
            position="relative"
            overflow="hidden"
        >
            <GridPattern
                size="8px"
                opacity={0.3}
                dotSize="1px"
                sx={{
                    '&::after': {
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 30%, transparent 70%, rgba(0,0,0,0.8))'
                    }
                }}
            />
            <Container maxW="container.xl" position="relative">
                <VStack spacing={8}>
                    <EditableText
                        content={pageContent?.community?.title}
                        onSave={(value) => handleContentSave('title', value)}
                        fontSize="4xl"
                        fontWeight="bold"
                        color="yellow.400"
                        textAlign="center"
                    />
                    <EditableText
                        content={pageContent?.community?.subtitle}
                        onSave={(value) => handleContentSave('subtitle', value)}
                        fontSize="xl"
                        color="white"
                        textAlign="center"
                        maxW="3xl"
                    />
                    <Button
                        onClick={openCalendly}
                        bg={buttonBg}
                        color="black"
                        px={8}
                        py={6}
                        fontSize="xl"
                        fontWeight="semibold"
                        _hover={{ bg: buttonHoverBg }}
                        mt={4}
                    >
                        Réserve ta consultation
                    </Button>
                    <SkoolComponent />
                </VStack>
            </Container>
        </Box>
    );
};

export default Community;