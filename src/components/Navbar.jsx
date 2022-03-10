import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = ({ onOpenSideDrawer }) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            variant="ghost"
            icon={<HiOutlineMenuAlt2 size={24} />}
            onClick={onOpenSideDrawer}
          />
          <IconButton
            onClick={toggleColorMode}
            aria-label={useColorModeValue('Dark mode', 'Light Mode')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          />
        </Flex>
      </Container>
    </Box>
  );
};

Navbar.propTypes = {
  onOpenSideDrawer: PropTypes.func.isRequired,
};

export default Navbar;
