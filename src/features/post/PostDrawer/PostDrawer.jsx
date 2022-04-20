/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Text,
  forwardRef,
  useDisclosure,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostDate from './PostDate';
import PostLocation from './PostLocation';
import DrawerHeader from './DrawerHeader';
import DrawerMenu from './DrawerMenu';
import { deletePost, selectPostsStatus } from '../postsSlice';
import { ConfirmationModal } from '../../../components/ConfirmationModal';

const PostDrawer = forwardRef(({ post }, ref) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const {
    onOpen: onModalOpen,
    onClose: onModalClose,
    isOpen: isModalOpen,
  } = useDisclosure();

  const postStatus = useSelector(selectPostsStatus);

  useEffect(() => {
    if (post) {
      onOpen();
    }
  }, [post]);

  useEffect(() => {
    if (postStatus === 'deleted') {
      onModalClose();
      onClose();
    }
  }, [postStatus]);

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const handleEdit = () => {
    navigate(`post/edit/${post.id}`);
  };

  return (
    <>
      <Drawer placement="bottom" ref={ref} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent pb="var(--sab)" borderTopRadius="xl">
          {post && (
            <>
              <DrawerHeader
                image={post?.image}
                name={post?.name}
                type={post?.type}
              >
                <DrawerMenu onDelete={onModalOpen} onEdit={handleEdit} />
              </DrawerHeader>
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
            </>
          )}
        </DrawerContent>
      </Drawer>
      <ConfirmationModal
        isOpen={isModalOpen}
        title="Delete Post"
        body="Are you sure you want to delete post?"
        confirmText="Delete Post"
        confirmButtonProps={{ variant: 'danger' }}
        cancelButtonProps={{ variant: 'ghost' }}
        onConfirm={handleDelete}
        onCancel={onModalClose}
      />
    </>
  );
});

export default PostDrawer;
