import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  DrawerHeader,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

const PostDrawerHeader = ({ name, type, image, children }) => (
  <DrawerHeader
    borderBottom="1px"
    borderColor="gray.600"
    display="flex"
    justifyContent="space-between"
  >
    <HStack spacing={4}>
      <Avatar src={image} ignoreFallback loading="eager" />
      <VStack spacing={0.5} alignItems="start">
        <Heading as="h2" size="md" color="gray.300">
          {name}
        </Heading>
        <Text
          color="gray.400"
          fontSize="sm"
          fontStyle="italic"
          fontWeight="400"
        >
          {type}
        </Text>
      </VStack>
    </HStack>
    {children}
  </DrawerHeader>
);

PostDrawerHeader.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PostDrawerHeader.defaultProps = {
  children: null,
};

export default PostDrawerHeader;
