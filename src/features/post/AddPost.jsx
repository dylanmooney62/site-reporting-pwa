import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Center, Fade, Image, useDisclosure } from '@chakra-ui/react';

import { addPost, resetPostsStatus, selectPostsStatus } from './postsSlice';
import { selectLocation } from '../location/locationSlice';
import BottomSheet from '../../components/BottomSheet';

import ImageControls from '../camera/ImageControls';
import PostForm from './PostForm';

const AddPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const postStatus = useSelector(selectPostsStatus);

  const location = useSelector(selectLocation);

  const image = useLocation().state?.image;

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
        <Image src={image} mx="auto" borderRadius="xl" pos="absolute" />
      </Center>
      <ImageControls onPost={onOpen} pos="absolute" bottom="0" w="full" />
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
