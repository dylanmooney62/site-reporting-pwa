import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Text fontWeight="bold">React App</Text>
          <Button
            onClick={toggleColorMode}
            bg={useColorModeValue('gray.200', 'gray.800')}
          >
            <VisuallyHidden>
              {useColorModeValue('Dark mode', 'Light Mode')}
            </VisuallyHidden>
            {useColorModeValue(<MoonIcon />, <SunIcon />)}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
