/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Image, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  resetPostsStatus,
  selectPostById,
  selectPostsStatus,
  updatePost,
} from './postsSlice';

import PostForm from './PostForm';
import { BottomSheet } from '../../components/BottomSheet';

const EditPost = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postStatus = useSelector(selectPostsStatus);
  const post = useSelector((state) => selectPostById(state, id));

  useEffect(() => {
    if (!post) {
      navigate('/', { replace: true });
    }
  }, [post]);

  const handleSubmit = ({ name, type, description }) => {
    if (postStatus === 'updating') return;

    dispatch(updatePost({ id: post.id, name, type: type.value, description }));
  };

  useEffect(() => {
    if (postStatus !== 'updated') return;

    dispatch(resetPostsStatus());
    navigate('/');
  }, [postStatus]);

  return (
    <>
      <Image
        src={post.image}
        height="100vh"
        objectFit="cover"
        objectPosition="center"
        pos="fixed"
        inset="0"
        w="full"
      />
      <BottomSheet isOpen>
        <PostForm
          post={post}
          onSubmit={handleSubmit}
          submitText="Update Post"
        />
      </BottomSheet>
    </>
  );
};

export default EditPost;
