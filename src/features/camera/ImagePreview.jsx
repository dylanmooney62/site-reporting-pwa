import React from 'react';
import PropTypes from 'prop-types';
import { Box, CloseButton, Image } from '@chakra-ui/react';

const ImagePreview = ({ imageSrc, onClose }) => (
  <Box height="100%" width="100%" px={2} pb={2}>
    <CloseButton size="lg" pos="absolute" top={4} left={4} onClick={onClose} />
    <Image
      src={imageSrc}
      width="100%"
      height="100%"
      objectFit="cover"
      objectPosition="center"
      borderRadius="xl"
    />
  </Box>
);

ImagePreview.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagePreview;
