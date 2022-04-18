import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container } from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';

const ImageControls = ({ onPost, ...props }) => (
  <Box bg="gray.900" pb="var(--sab)" {...props}>
    <Container maxW="container.xl" display="flex" py="4">
      <Button
        variant="primary"
        px={6}
        borderRadius="full"
        rightIcon={<FiSend color="white" />}
        ml="auto"
        onClick={onPost}
      >
        Post
      </Button>
    </Container>
  </Box>
);

ImageControls.propTypes = {
  onPost: PropTypes.func.isRequired,
};

export default ImageControls;
