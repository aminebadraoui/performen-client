import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const GridPattern = ({
    opacity = 0.3,
    size = '8px',
    dotSize = '1px',
    ...props
}) => {
    const color = useColorModeValue('gray.400', 'gray.600');

    return (
        <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            pointerEvents="none"
            zIndex="0"
            {...props}
            sx={{
                backgroundImage: `radial-gradient(${color} ${dotSize}, transparent ${dotSize})`,
                backgroundSize: `${size} ${size}`,
                backgroundPosition: '0 0',
                opacity: opacity,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 50%, transparent)',
                    pointerEvents: 'none'
                }
            }}
        />
    );
};

export default GridPattern; 