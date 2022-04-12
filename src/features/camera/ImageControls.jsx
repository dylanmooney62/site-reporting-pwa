/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Container, Flex, IconButton } from '@chakra-ui/react';
import { FiSend, FiSave } from 'react-icons/fi';

const ImageControls = ({ imageSrc }) => {
  const handleSaveImage = () => {};

  const handlePostImage = () => {};

  return (
    <Box bg="gray.900" pb="var(--sab)">
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <IconButton
          variant="ghost"
          colorScheme="white"
          aria-label="Save Image"
          size="lg"
          icon={<FiSave />}
          onClick={handleSaveImage}
        />
        <Button
          px={6}
          bgColor="blue.500"
          onClick={handlePostImage}
          borderRadius="full"
          rightIcon={<FiSend color="white" />}
        >
          Post
        </Button>
      </Container>
    </Box>
  );
};

ImageControls.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default ImageControls;
