import React, { useEffect, useState } from 'react';
import { Box, Container, VStack, Button, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from '@chakra-ui/react';
import useModalStore from '../stores/useModalStore';
import useContentStore from '../stores/useContentStore';
import useAuthStore from '../stores/useAuthStore';
import EditableText from './EditableText';
import EditableImage from './EditableImage';
import WhoAmI from './WhoAmI';
import Community from './Community';
import TimeToTakeAction from './TimeToTakeAction';
import GoogleReviews from './GoogleReviews';
import CalendlyModal from './CalendlyModal';
import Footer from './Footer';

const LandingPage = () => {
    const { isCalendlyOpen, openCalendly, closeCalendly } = useModalStore();
    const { content, loadContent, updateContent, isLoading } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState('');
    const isAdmin = useAuthStore((state) => state.isAdmin);
    const buttonBg = useColorModeValue('yellow.400', 'yellow.500');
    const buttonHoverBg = useColorModeValue('yellow.500', 'yellow.600');

    useEffect(() => {
        loadContent();
    }, [loadContent]);

    const handleContentSave = (section, field, value) => {
        updateContent('landing', section, field, value);
    };

    const handleSaveCta = () => {
        handleContentSave('hero', 'cta_label', editValue);
        setIsEditing(false);
    };

    if (isLoading || !content) {
        return <Box minH="100vh" bg="gray.900" />;
    }

    const pageContent = content.pages.landing;

    return (
        <>
            <Box as="main">
                {/* Hero Section - Black */}
                <Box as="section" bg="black" py={{ base: 12, md: 24 }}>
                    <Container maxW="container.xl" px={6}>
                        <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} alignItems="center" gap={8}>
                            <Box flex={1} position="relative" h={{ base: "500px", md: "700px" }} mb={{ base: 8, md: 0 }}>
                                <EditableImage
                                    content={pageContent.hero.image}
                                    onSave={(value) => handleContentSave('hero', 'image', value)}
                                    objectFit="cover"
                                    w="full"
                                    h="full"
                                    borderRadius="xl"
                                    boxShadow="2xl"
                                />
                                <Box
                                    position="absolute"
                                    inset={0}
                                    bgGradient="linear(to-r, blackAlpha.600, transparent)"
                                    pointerEvents="none"
                                    zIndex={0}
                                />
                            </Box>
                            <VStack flex={1} align="start" spacing={6}>
                                <EditableText
                                    content={pageContent.hero.title}
                                    onSave={(value) => handleContentSave('hero', 'title', value)}
                                    fontSize="6xl"
                                    fontWeight="bold"
                                    color="white"
                                    as="h1"
                                />
                                <EditableText
                                    content={pageContent.hero.subtitle}
                                    onSave={(value) => handleContentSave('hero', 'subtitle', value)}
                                    fontSize="xl"
                                    color="gray.300"
                                    as="h2"
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
                                            {pageContent.hero.cta_label}
                                        </Button>
                                        <EditableText
                                            content={pageContent.hero.cta_label}
                                            onSave={(value) => handleContentSave('hero', 'cta_label', value)}
                                            display="none"
                                        />
                                    </Box>
                                </Box>
                            </VStack>
                        </Box>
                    </Container>
                </Box>

                {/* Who Am I Section - White */}
                <Box bg="white">
                    <WhoAmI />
                </Box>

                {/* Community Section - Black */}
                <Box bg="black">
                    <Community />
                </Box>

                {/* Google Reviews Section - White */}
                <Box bg="white">
                    <GoogleReviews />
                </Box>

                {/* Time to Take Action Section */}
                <Box bg="yellow.400">
                    <TimeToTakeAction />
                </Box>

                {/* Footer */}
                <Footer />
            </Box>
            <CalendlyModal isOpen={isCalendlyOpen} onClose={closeCalendly} />
            <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
                <ModalOverlay />
                <ModalContent bg="white">
                    <ModalHeader color="gray.900">Edit Button Text</ModalHeader>
                    <ModalBody>
                        <Input
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            color="gray.900"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setIsEditing(false)} variant="ghost" color="gray.600" mr={3}>
                            Cancel
                        </Button>
                        <Button onClick={handleSaveCta} bg={buttonBg} color="black" _hover={{ bg: buttonHoverBg }}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default LandingPage;