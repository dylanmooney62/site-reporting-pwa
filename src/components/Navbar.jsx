import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const Navbar = ({ onOpenSideDrawer }) => (
  <Box position="fixed" mt={4} ml={4}>
    <Flex alignItems="center" justifyContent="space-between">
      <IconButton
        variant="ghost"
        icon={<HiOutlineMenuAlt2 size={24} />}
        onClick={onOpenSideDrawer}
        bgColor="gray.900"
        size="lg"
        borderRadius={100}
        shadow="md"
      />
      {/* <IconButton
            onClick={toggleColorMode}
            aria-label={useColorModeValue('Dark mode', 'Light Mode')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          /> */}
    </Flex>
  </Box>
);

Navbar.propTypes = {
  onOpenSideDrawer: PropTypes.func.isRequired,
};

export default Navbar;
