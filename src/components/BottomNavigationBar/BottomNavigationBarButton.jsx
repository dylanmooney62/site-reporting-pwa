import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, useColorModeValue } from '@chakra-ui/react';

const BottomNavigationBarButton = ({ icon, label }) => {
  const bg = useColorModeValue('gray.200', 'whiteAlpha.200');

  return (
    <IconButton
      variant="ghost"
      size="lg"
      _hover={{ bg }}
      aria-label={label}
      icon={icon}
    />
  );
};

BottomNavigationBarButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default BottomNavigationBarButton;
