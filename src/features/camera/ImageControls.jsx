/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Fade,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { FiSend, FiSave } from 'react-icons/fi';

const ImageControls = ({ imageSrc, onPost }) => {
  const handleSaveImage = () => {};

  return (
    <Box bg="gray.900" pb="var(--sab)">
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Fade in>
          <IconButton
            variant="ghost"
            colorScheme="white"
            aria-label="Save Image"
            size="lg"
            icon={<FiSave />}
            onClick={handleSaveImage}
          />
        </Fade>
        <Fade in>
          <Button
            px={6}
            bgColor="blue.500"
            onClick={onPost}
            borderRadius="full"
            rightIcon={<FiSend color="white" />}
          >
            Post
          </Button>
        </Fade>
      </Container>
    </Box>
  );
};

ImageControls.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  onPost: PropTypes.func.isRequired,
};

export default ImageControls;
