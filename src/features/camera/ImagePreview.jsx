/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, CloseButton, Image, Fade } from '@chakra-ui/react';

const ImagePreview = ({ src, onClose, ...props }) => (
  <Flex
    pos="relative"
    flex={1}
    justifyContent="center"
    alignItems="center"
    {...props}
  >
    <Fade in>
      <CloseButton onClick={onClose} pos="absolute" top={6} left={4} />
      <Image src={src} borderRadius="xl" />
    </Fade>
  </Flex>
);

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagePreview;
