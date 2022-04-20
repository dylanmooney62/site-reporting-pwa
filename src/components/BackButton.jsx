import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export const BackButton = ({ to, icon }) => {
  const navigate = useNavigate();

  return (
    <IconButton
      pos="absolute"
      top="4"
      left="4"
      colorScheme="gray"
      variant="ghost"
      icon={icon || <Icon as={FiArrowLeft} w={6} h={6} />}
      aria-label="back"
      onClick={() => navigate(to || -1)}
      zIndex="popover"
    />
  );
};

BackButton.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.node,
};
