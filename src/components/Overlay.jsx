import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

const Overlay = ({ children, ...props }) => (
  <Box
    position="absolute"
    top="0"
    left="0"
    right="0"
    bottom="0"
    zIndex="1000"
    height="100%"
    width="100%"
    flex={1}
    {...props}
  >
    {children}
  </Box>
);

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Overlay;
