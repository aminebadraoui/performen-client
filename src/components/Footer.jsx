import React from 'react';
import { Box, Container, Text, Link, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box as="footer" bg="black" color="white" py={8}>
            <Container maxW="container.xl">
                <VStack spacing={4}>
                    <HStack spacing={4}>
                        <Link href="https://www.instagram.com/aiden_anis/" isExternal>
                            <Icon as={FaInstagram} boxSize={6} color="white" _hover={{ color: 'yellow.400' }} />
                        </Link>
                    </HStack>
                    <Text fontSize="sm" color="gray.400">
                        © {new Date().getFullYear()} PerforMen. Tous droits réservés.
                    </Text>
                </VStack>
            </Container>
        </Box>
    );
};

export default Footer;