/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';

import { useForm, Controller } from 'react-hook-form';

import { selectLocation } from '../location/locationSlice';

import ANIMALS from './animals.json';
import BottomSheet from '../../components/BottomSheet';
import { addPost, resetPostsStatus, selectPostsStatus } from './postsSlice';

const animalOptions = ANIMALS.map((animal) => ({
  label: animal.charAt(0).toUpperCase() + animal.slice(1),
  value: animal,
}));

// eslint-disable-next-line react/prop-types
const AddPost = () => {
  const routerLocation = useLocation();
  const navigate = useNavigate();
  const location = useSelector(selectLocation);
  const dispatch = useDispatch();

  const postStatus = useSelector(selectPostsStatus);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const imageSrc = routerLocation?.state?.imageSrc;

  if (!imageSrc) {
    navigate('/', { replace: true });
  }

  const onSubmit = (data) => {
    const post = {
      ...data,
      location,
      imageSrc,
    };

    if (postStatus !== 'loading') {
      dispatch(addPost(post));
    }
  };

  useEffect(() => {
    if (postStatus === 'failed') {
      // display error message
      return;
    }

    if (postStatus === 'succeeded') {
      dispatch(resetPostsStatus());
      navigate('/map');
    }
  }, [postStatus]);

  return (
    <Box
      pos="absolute"
      height="100vh"
      w="full"
      overflowY="auto"
      overflowX="hidden"
    >
      <Box
        pos="fixed"
        height="66vh"
        w="full"
        bgImage={imageSrc}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        zIndex={1}
      />

      <BottomSheet spacing="55vh">
        <VStack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors?.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              {...register('name', { required: 'Animal name is required.' })}
              id="name"
              w="full"
            />
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors?.type}>
            <FormLabel htmlFor="type">Animal Type</FormLabel>
            <Controller
              control={control}
              name="type"
              rules={{ required: 'Animal type is required.' }}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select animal type"
                  options={animalOptions}
                />
              )}
            />

            <FormErrorMessage>{errors?.type?.message}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="location">Location</FormLabel>
            <Input value={[location.lat, location.lng].join(', ')} readOnly />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea id="description" />
          </FormControl>

          <Button
            type="submit"
            isFullWidth
            bgColor="blue.500"
            size="lg"
            isLoading={postStatus === 'loading'}
          >
            Submit
          </Button>
        </VStack>
      </BottomSheet>
    </Box>
  );
};

export default AddPost;
