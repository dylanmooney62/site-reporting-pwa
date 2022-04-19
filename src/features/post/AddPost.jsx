/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Flex, Image, useDisclosure } from '@chakra-ui/react';
import BottomSheet from '../../components/BottomSheet';
import { addPost, resetPostsStatus, selectPostsStatus } from './postsSlice';
import ImageControls from '../camera/ImageControls';
import PostForm from './PostForm';
import { selectLocation } from '../location/locationSlice';

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const postStatus = useSelector(selectPostsStatus);

  const location = useSelector(selectLocation);

  const image = useLocation().state?.image;

  const handleSubmit = ({ name, type: { value }, description }) => {
    if (postStatus === 'adding') return;

    dispatch(addPost({ name, type: value, description, image, location }));
  };

  useEffect(() => {
    if (postStatus !== 'added') return;
    dispatch(resetPostsStatus());
    navigate('/');
  }, [postStatus]);

  return (
    <>
      <Flex flex={1} flexDirection="column">
        <Image src={image} mx="auto" borderRadius="xl" my="auto" />
        <ImageControls onPost={onOpen} />
      </Flex>
      <BottomSheet isOpen={isOpen} onClose={onClose} top="calc(100vh - 30vh)">
        <PostForm
          post={null}
          onSubmit={handleSubmit}
          isLoading={postStatus === 'loading'}
        />
      </BottomSheet>
    </>
  );
};

export default AddPost;
