import React from 'react';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Text fontWeight="bold">React App</Text>
          <IconButton
            onClick={toggleColorMode}
            aria-label={useColorModeValue('Dark mode', 'Light Mode')}
            bg={useColorModeValue('gray.200', 'gray.800')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
