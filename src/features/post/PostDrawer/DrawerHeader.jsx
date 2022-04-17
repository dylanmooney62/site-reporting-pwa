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
import PostDetailDrawerMenu from './DrawerMenu';

const PostDetailHeader = ({ title, subtitle, avatar }) => (
  <DrawerHeader
    borderBottom="1px"
    borderColor="gray.600"
    display="flex"
    justifyContent="space-between"
  >
    <HStack spacing={4}>
      <Avatar src={avatar} ignoreFallback loading="eager" />
      <VStack spacing={0.5} alignItems="start">
        <Heading as="h2" size="md" color="gray.300">
          {title}
        </Heading>
        <Text
          color="gray.400"
          fontSize="sm"
          fontStyle="italic"
          fontWeight="400"
        >
          {subtitle}
        </Text>
      </VStack>
    </HStack>
    <PostDetailDrawerMenu />
  </DrawerHeader>
);

PostDetailHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PostDetailHeader;
