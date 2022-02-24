import React from 'react';
import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react';
import { FiMapPin, FiCamera, FiMessageSquare } from 'react-icons/fi';
import BottomNavigationBarButton from './BottomNavigationBarButton';

const BottomNavigationBar = () => (
  <Box marginTop="auto" bg={useColorModeValue('gray.100', 'gray.900')}>
    <Container maxW="container.xl">
      <Flex h={16} alignItems="center" justifyContent="space-evenly">
        <BottomNavigationBarButton icon={<FiMapPin />} label="Map" />
        <BottomNavigationBarButton icon={<FiCamera />} label="Camera" />
        <BottomNavigationBarButton
          icon={<FiMessageSquare />}
          label="Messages"
        />
      </Flex>
    </Container>
  </Box>
);

export default BottomNavigationBar;
