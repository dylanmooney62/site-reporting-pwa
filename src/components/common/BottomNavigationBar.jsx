import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const BottomNavigationBar = () => (
  <Box marginTop="auto" bg={useColorModeValue('gray.100', 'gray.900')}>
    <Container maxW="container.xl">
      <Flex h={16} alignItems="center">
        <Text>Hell there</Text>
      </Flex>
    </Container>
  </Box>
);

export default BottomNavigationBar;
