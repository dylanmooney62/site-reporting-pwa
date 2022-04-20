import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Center, Fade, Image, useDisclosure } from '@chakra-ui/react';

import { addPost, resetPostsStatus, selectPostsStatus } from './postsSlice';
import { selectLocation } from '../location/locationSlice';

import ImageControls from '../camera/ImageControls';
import PostForm from './PostForm';
import { BottomSheet } from '../../components/BottomSheet';

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postStatus = useSelector(selectPostsStatus);

  const location = useSelector(selectLocation);

  const image = useLocation().state?.image;

  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    if (!image) {
      navigate('/camera');
    }
  }, [image]);

  useEffect(() => {
    if (postStatus === 'added') {
      dispatch(resetPostsStatus());
      navigate('/');
    }
  }, [postStatus]);

  const handleSubmit = ({ name, type, description }) => {
    if (postStatus === 'adding') return;

    const post = { name, type: type.value, description, image, location };

    dispatch(addPost(post));
  };

  return (
    <>
      <Center
        flex={1}
        position="relative"
        as={Fade}
        in
        mt="calc(-64px - var(--sab))"
      >
        <Image src={image} borderRadius="xl" pos="absolute" />
      </Center>
      <ImageControls onPost={onOpen} pos="absolute" bottom="0" w="full" />
      <BottomSheet onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
        <PostForm onSubmit={handleSubmit} submitText="Add Post" />
      </BottomSheet>
    </>
  );
};

export default AddPost;
