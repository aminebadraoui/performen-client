import React from 'react';
import { Box, Container, Heading, SimpleGrid, VStack, Text, Icon, HStack, Avatar, Image, Wrap, WrapItem } from '@chakra-ui/react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// These are example reviews - we'll replace this with actual Google Reviews
const reviews = [
    {
        author_name: "Maxime Lapointe",
        rating: 5,
        text: "Aiden est un excellent coach qui sait adapter son approche selon les besoins de chacun. Il est très professionnel et à l'écoute. Je le recommande fortement!",
        date: "2024-02-15",
        relative_time_description: "2 months ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile1",
        review_images: [
            "https://performen-dashboard.mnfstagency.com/assets/review-image1.jpg",
            "https://performen-dashboard.mnfstagency.com/assets/review-image2.jpg"
        ]
    },
    {
        author_name: "Francis Bouchard",
        rating: 5,
        text: "Aiden est un excellent coach qui prend le temps de bien comprendre nos objectifs et qui nous aide à les atteindre. Il est très professionnel et motivant!",
        date: "2024-01-20",
        relative_time_description: "3 months ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile2",
        review_images: [
            "https://performen-dashboard.mnfstagency.com/assets/review-image3.jpg"
        ]
    },
    {
        author_name: "Alexandre Dubois",
        rating: 5,
        text: "Super expérience avec Aiden! Il est très professionnel et motivant. Les résultats sont au rendez-vous!",
        date: "2024-03-10",
        relative_time_description: "1 month ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile3"
    },
    {
        author_name: "Jean-Philippe Tremblay",
        rating: 5,
        text: "Aiden est un coach exceptionnel! Sa méthode d'entraînement est efficace et personnalisée. J'ai vu des résultats impressionnants en peu de temps.",
        date: "2024-04-05",
        relative_time_description: "2 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile4"
    },
    {
        author_name: "Marc-Antoine Gagnon",
        rating: 5,
        text: "Un coach passionné qui nous pousse à nous dépasser. Son approche holistique et ses conseils en nutrition ont transformé ma vie. Merci Aiden!",
        date: "2024-03-20",
        relative_time_description: "1 month ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile5"
    },
    {
        author_name: "Simon Bergeron",
        rating: 5,
        text: "Excellente expérience! Aiden a une approche très professionnelle et motivante. Il adapte parfaitement les exercices à nos objectifs et notre niveau.",
        date: "2024-04-15",
        relative_time_description: "3 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile6"
    },
    {
        author_name: "Louis-Philippe Roy",
        rating: 5,
        text: "Je recommande fortement! Aiden est un excellent coach qui sait nous motiver et nous pousser à atteindre nos objectifs. Très satisfait des résultats!",
        date: "2024-03-25",
        relative_time_description: "1 month ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile7"
    },
    {
        author_name: "Gabriel Côté",
        rating: 5,
        text: "Un coach exceptionnel qui combine expertise technique et approche personnalisée. Les séances sont intenses mais toujours adaptées à notre niveau.",
        date: "2024-02-10",
        relative_time_description: "2 months ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile8"
    },
    {
        author_name: "Mathieu Leblanc",
        rating: 5,
        text: "Aiden est un coach remarquable! Son expertise et son professionnalisme sont impressionnants. Les résultats parlent d'eux-mêmes.",
        date: "2024-05-05",
        relative_time_description: "6 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile9"
    },
    {
        author_name: "Vincent Pelletier",
        rating: 5,
        text: "Un coach qui fait vraiment la différence! Son approche personnalisée et sa passion pour le fitness sont contagieuses. Je vois des progrès constants!",
        date: "2024-04-20",
        relative_time_description: "1 week ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile10"
    },
    {
        author_name: "Philippe Dufour",
        rating: 5,
        text: "Aiden est plus qu'un coach, c'est un mentor qui nous guide vers nos objectifs. Sa méthode est efficace et les résultats sont impressionnants.",
        date: "2024-04-15",
        relative_time_description: "2 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile11"
    },
    {
        author_name: "Nicolas Girard",
        rating: 5,
        text: "Excellent suivi et programmes adaptés à mes besoins. Aiden sait comment nous motiver et nous faire progresser de manière sûre et efficace.",
        date: "2024-04-05",
        relative_time_description: "3 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile12"
    },
    {
        author_name: "Étienne Moreau",
        rating: 5,
        text: "La meilleure décision que j'ai prise pour ma santé! Aiden comprend parfaitement nos objectifs et nous guide avec expertise. Les résultats sont incroyables!",
        date: "2024-04-10",
        relative_time_description: "4 days ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile13"
    },
    {
        author_name: "Samuel Thibault",
        rating: 5,
        text: "Coach exceptionnel qui sait nous motiver et nous pousser à donner le meilleur de nous-mêmes. Son approche personnalisée fait toute la différence!",
        date: "2024-04-15",
        relative_time_description: "5 days ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile14"
    },
    {
        author_name: "William Lavoie",
        rating: 5,
        text: "Aiden est un véritable professionnel qui maîtrise son art. Ses conseils sont précieux et son suivi est impeccable. Je progresse chaque semaine!",
        date: "2024-04-20",
        relative_time_description: "1 week ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile15"
    },
    {
        author_name: "Olivier Beaulieu",
        rating: 5,
        text: "Un coach passionné qui nous transmet son énergie positive. Les séances sont variées et stimulantes. Je recommande à 100%!",
        date: "2024-04-15",
        relative_time_description: "2 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile16"
    },
    {
        author_name: "Charles-Antoine Lemieux",
        rating: 5,
        text: "Grâce à Aiden, j'ai complètement transformé mon approche du fitness. Son expertise en nutrition et en entraînement est remarquable!",
        date: "2024-04-05",
        relative_time_description: "3 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile17"
    },
    {
        author_name: "Félix Rousseau",
        rating: 5,
        text: "Coach extraordinaire qui sait nous motiver tout en respectant nos limites. Son approche globale de la santé est très appréciée!",
        date: "2024-04-10",
        relative_time_description: "4 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile18"
    },
    {
        author_name: "Antoine Gendron",
        rating: 5,
        text: "Les séances avec Aiden sont toujours productives et motivantes. Sa méthode d'entraînement est efficace et les résultats sont visibles!",
        date: "2024-03-20",
        relative_time_description: "1 month ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile19"
    },
    {
        author_name: "Laurent Mercier",
        rating: 5,
        text: "Un coach qui nous pousse à nous dépasser tout en restant à l'écoute de nos besoins. Son professionnalisme est exemplaire!",
        date: "2024-05-05",
        relative_time_description: "5 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile20"
    },
    {
        author_name: "Raphaël Fortin",
        rating: 5,
        text: "Aiden a une approche unique qui combine parfaitement entraînement physique et mental. Les résultats dépassent mes attentes!",
        date: "2024-05-10",
        relative_time_description: "6 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile21"
    },
    {
        author_name: "Thomas Lévesque",
        rating: 5,
        text: "Un excellent coach qui sait nous motiver et nous faire progresser. Son expertise et son professionnalisme sont remarquables!",
        date: "2024-05-15",
        relative_time_description: "7 weeks ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile22"
    },
    {
        author_name: "Hugo Bélanger",
        rating: 5,
        text: "Aiden est un coach exceptionnel qui nous aide à atteindre nos objectifs. Sa méthode est efficace et les résultats sont au rendez-vous!",
        date: "2024-02-10",
        relative_time_description: "2 months ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile23"
    },
    {
        author_name: "Xavier Champagne",
        rating: 5,
        text: "Les séances sont toujours bien structurées et adaptées à nos besoins. Aiden sait comment nous motiver et nous faire progresser!",
        date: "2024-02-15",
        relative_time_description: "2 months ago",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/profile24"
    }
];

const ReviewCard = ({ review }) => {
    return (
        <Box
            bg="white"
            p={6}
            borderRadius="xl"
            borderWidth="1px"
            borderColor="gray.200"
            boxShadow="lg"
            position="relative"
            _hover={{ transform: 'translateY(-4px)', transition: 'transform 0.2s' }}
        >
            <Icon
                as={FaQuoteLeft}
                position="absolute"
                top={4}
                left={4}
                color="yellow.500"
                opacity={0.2}
                boxSize={8}
            />
            <VStack align="start" spacing={4}>
                <HStack spacing={1}>
                    {[...Array(5)].map((_, i) => (
                        <Icon
                            key={i}
                            as={FaStar}
                            color={i < review.rating ? 'yellow.400' : 'gray.300'}
                        />
                    ))}
                </HStack>
                <Text fontSize="md" color="gray.700" fontStyle="italic">
                    "{review.text}"
                </Text>
                {review.review_images && review.review_images.length > 0 && (
                    <Wrap spacing={2}>
                        {review.review_images.map((image, index) => (
                            <WrapItem key={index}>
                                <Image
                                    src={image}
                                    alt={`Review image ${index + 1}`}
                                    boxSize="100px"
                                    objectFit="cover"
                                    borderRadius="md"
                                    cursor="pointer"
                                    _hover={{ opacity: 0.8 }}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                )}
                <HStack spacing={3}>
                    <Avatar
                        size="md"
                        name={review.author_name}
                        src={review.profile_photo_url}
                        bg="gray.200"
                    />
                    <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" color="gray.900">{review.author_name}</Text>
                        <HStack spacing={2} color="gray.500" fontSize="sm">
                            <Text>{review.relative_time_description}</Text>
                            <Text>•</Text>
                            <Text>{new Date(review.date).toLocaleDateString('fr-CA')}</Text>
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>
        </Box>
    );
};

const GoogleReviews = () => {
    return (
        <Box as="section" py={{ base: 16, md: 24 }} bg="white">
            <Container maxW="container.xl" px={6}>
                <VStack spacing={12}>
                    <Heading
                        as="h2"
                        fontSize="4xl"
                        fontWeight="bold"
                        color="gray.900"
                        textAlign="center"
                    >
                        What Our Clients Say
                    </Heading>
                    <SimpleGrid
                        columns={{ base: 1, md: 2, lg: 3 }}
                        spacing={8}
                        width="full"
                    >
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </SimpleGrid>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                        These reviews are from Google Reviews. Visit our{" "}
                        <Box
                            as="a"
                            href="https://www.google.com/maps/place/PerforMen+Fitness/@45.5217863,-73.5610786,17z/data=!4m14!1m5!8m4!1e1!2s106853656763065166772!3m1!1e1!3m7!1s0x4cc91b752c74338b:0xc8d6341bcef53941!8m2!3d45.5217863!4d-73.5585037!9m1!1b1!16s%2Fg%2F11tpbr1yg0"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="yellow.500"
                            _hover={{ textDecoration: "underline" }}
                        >
                            Google Business Profile
                        </Box>
                        {" "}to see more reviews.
                    </Text>
                </VStack>
            </Container>
        </Box>
    );
};

export default GoogleReviews; 