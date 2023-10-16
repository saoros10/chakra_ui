import React from 'react';
import { Box, Button, ChakraProvider, Image, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Box>
      <ChakraProvider>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          p={2}
        >
          <Image
            src="https://cdn.pixabay.com/photo/2018/04/04/05/15/panoramic-3288907_1280.jpg"
            alt="imagen"
            width="100%"
            height="auto"
            maxH="300px"
          />
          <Text
            color="white"
            fontSize="24px"
            fontWeight="bold"
            mt={-60}
          >
            Live young, wild and free
          </Text>
          <Button
            color="white"
            variant="ghost"
            mx={2}
            mt={-40}
          >
            Ver detalles
          </Button>
          <Button
            color="white"
            variant="ghost"
            mx={4}
            mt={-40}
          >
            Ver videos
          </Button>
        </Box>
      </ChakraProvider>
    </Box>
  );
}

export default Header;