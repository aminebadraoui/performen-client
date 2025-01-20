import React from 'react';
import { Box, Container, Stack, HStack, Text, Link, Icon, SimpleGrid, Image, Flex } from '@chakra-ui/react';
import { FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';
import GridPattern from './GridPattern';

const Footer = () => {
    return (
        <Box as="footer" bg="black" color="white" py={20} position="relative" overflow="hidden">
            <GridPattern
                size="6px"
                opacity={0.2}
                dotSize="1px"
                sx={{
                    '&::after': {
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 30%, transparent 70%, rgba(0,0,0,0.8))'
                    }
                }}
            />
            <Container maxW="container.xl" position="relative">
                <Stack spacing={16}>
                    {/* Main Footer Row */}
                    <Flex
                        direction={{ base: 'column', lg: 'row' }}
                        justify="space-between"
                        align={{ base: 'center', lg: 'flex-start' }}
                        gap={{ base: 12, lg: 0 }}
                    >
                        {/* Left Side - Logo and Social */}
                        <Stack spacing={8}>
                            <Image
                                src="/assets/logo.webp"
                                alt="PerforMen Logo"
                                height="100px"
                                objectFit="contain"
                            />
                            <HStack spacing={6}>
                                <Link href="https://www.instagram.com/aiden_anis/" isExternal>
                                    <Icon
                                        as={FaInstagram}
                                        boxSize={6}
                                        color="white"
                                        _hover={{ color: 'yellow.400' }}
                                        sx={{
                                            border: '2px solid',
                                            borderColor: 'yellow.400',
                                            borderRadius: 'full',
                                            p: 1,
                                            boxSize: 8,
                                        }}
                                    />
                                </Link>
                                <Link href="#" isExternal>
                                    <Icon
                                        as={FaYoutube}
                                        boxSize={6}
                                        color="white"
                                        _hover={{ color: 'yellow.400' }}
                                        sx={{
                                            border: '2px solid',
                                            borderColor: 'yellow.400',
                                            borderRadius: 'full',
                                            p: 1,
                                            boxSize: 8,
                                        }}
                                    />
                                </Link>
                                <Link href="#" isExternal>
                                    <Icon
                                        as={FaFacebookF}
                                        boxSize={6}
                                        color="white"
                                        _hover={{ color: 'yellow.400' }}
                                        sx={{
                                            border: '2px solid',
                                            borderColor: 'yellow.400',
                                            borderRadius: 'full',
                                            p: 1,
                                            boxSize: 8,
                                        }}
                                    />
                                </Link>
                            </HStack>
                        </Stack>

                        {/* Right Side - Navigation */}
                        <SimpleGrid
                            columns={{ base: 1, sm: 3 }}
                            spacing={{ base: 8, sm: 16 }}
                            textAlign={{ base: 'center', sm: 'left' }}
                        >
                            <Stack spacing={3}>
                                <Link href="#" color="white" _hover={{ color: 'yellow.400' }}>CONTACT US</Link>
                                <Link href="#" color="white" _hover={{ color: 'yellow.400' }}>PRIVACY POLICY</Link>
                            </Stack>
                            <Stack spacing={3}>
                                <Link href="#" color="white" _hover={{ color: 'yellow.400' }}>ABOUT</Link>
                                <Link href="#" color="white" _hover={{ color: 'yellow.400' }}>LOGIN</Link>
                            </Stack>
                            <Stack spacing={3}>
                                <Link href="#" color="white" _hover={{ color: 'yellow.400' }}>TERMS OF USE</Link>
                                <Link href="#" color="white" _hover={{ color: 'yellow.400' }}>FREE GIFT</Link>
                            </Stack>
                        </SimpleGrid>
                    </Flex>

                    {/* Copyright Text */}
                    <Box fontSize="sm" color="gray.400" textAlign="center" maxW="container.md" mx="auto">
                        <Text mb={4}>
                            PerforMen™ est une marque déposée et ne peut être copiée ou utilisée à quelque fin que ce soit sans consentement écrit exprès. Copyright ©{new Date().getFullYear()} PerforMen.
                        </Text>
                        <Text>
                            Les informations et le contenu de ce site web, produits, emails, messages ou consultations sont uniquement à titre informatif et ne remplacent pas les conseils médicaux professionnels, le diagnostic ou le traitement.
                        </Text>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;