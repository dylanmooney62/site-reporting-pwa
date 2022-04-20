import React from 'react';
import PropTypes from 'prop-types';
import { Icon, IconButton } from '@chakra-ui/react';
import { FiCircle } from 'react-icons/fi';

const CameraButton = ({ onCapture, ...props }) => (
  <IconButton
    pos="absolute"
    bottom={16}
    variant="ghost"
    icon={<Icon as={FiCircle} strokeWidth={2} w={20} h={20} />}
    onClick={onCapture}
    {...props}
  />
);

CameraButton.propTypes = {
  onCapture: PropTypes.func.isRequired,
};

export default CameraButton;
