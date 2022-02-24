import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@chakra-ui/react';

const BottomNavigationBarButton = ({ ...props }) => (
  <IconButton {...props} variant="ghost" fontSize="xl" />
);

BottomNavigationBarButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default BottomNavigationBarButton;
