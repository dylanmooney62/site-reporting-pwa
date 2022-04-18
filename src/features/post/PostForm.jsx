/* eslint-disable  */
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectLocation } from '../location/locationSlice';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import ANIMALS from './animals.json';
import { Select } from 'chakra-react-select';

const options = ANIMALS.map((animal) => ({
  label: animal.charAt(0).toUpperCase() + animal.slice(1),
  value: animal,
}));

const PostForm = ({ post, onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const location = useSelector(selectLocation);

  const loc = post ? post.location : location;
  const selectValue = post ? post.type : '';

  return (
    <VStack as="form" spacing={6} onSubmit={handleSubmit(onSubmit)} pb={4}>
      <FormControl isInvalid={errors?.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          {...register('name', {
            required: 'Animal name is required.',
          })}
          id="name"
          defaultValue={post && post.name}
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
              options={options}
              value={options.find((o) => o.value === selectValue)}
            />
          )}
        />

        <FormErrorMessage>{errors?.type?.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="location">Location</FormLabel>
        <Input value={[loc.lat, loc.lng].join(', ')} readOnly />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          {...register('description')}
          id="description"
          defaultValue={post && post.description}
        />
      </FormControl>

      <Button
        size="lg"
        isFullWidth
        bgColor="blue.500"
        type="submit"
        isLoading={isLoading}
      >
        Save Post
      </Button>
    </VStack>
  );
};

export default PostForm;
