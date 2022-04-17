import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Text,
  forwardRef,
} from '@chakra-ui/react';

import PostDate from './PostDate';
import PostLocation from './PostLocation';
import DrawerHeader from './DrawerHeader';

const PostDetailDrawer = forwardRef(({ post, isOpen, onClose }, ref) => (
  <Drawer placement="bottom" isOpen={isOpen} onClose={onClose} ref={ref}>
    <DrawerOverlay />
    <DrawerContent pb="var(--sab)" borderTopRadius="xl">
      <DrawerHeader
        avatar={post?.imageSrc}
        title={post?.name}
        subtitle={post?.type}
      />
      <DrawerBody py={0} px={0}>
        <HStack
          spacing={6}
          w="full"
          p={4}
          borderBottom="1px"
          borderColor="gray.600"
        >
          <PostDate date={post?.date} />
          <PostLocation location={post?.location} />
        </HStack>
        <Box p={4}>
          <Text fontSize="sm" color="gray.200">
            {post?.description}
          </Text>
        </Box>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
));

export default PostDetailDrawer;
