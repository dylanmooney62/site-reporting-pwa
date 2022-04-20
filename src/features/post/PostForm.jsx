import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { Button, VStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { selectLocation } from '../location/locationSlice';

import { InputGroup } from '../../components/InputGroup';
import { SelectGroup } from '../../components/SelectGroup';

import ANIMALS from './animals.json';

const options = ANIMALS.map((animal) => ({
  label: animal.charAt(0).toUpperCase() + animal.slice(1),
  value: animal.charAt(0).toUpperCase() + animal.slice(1),
}));

const PostForm = ({ post, onSubmit, submitText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  return (
    <VStack
      as="form"
      spacing={6}
      onSubmit={handleSubmit(onSubmit)}
      pb={4}
      bg="gray.700"
    >
      <InputGroup
        id="name"
        label="Name"
        error={errors?.name?.message}
        {...register('name', { required: 'Animal name is required' })}
        defaultValue={post?.name}
      />

      <SelectGroup
        id="animal"
        label="Animal"
        error={errors?.type?.message}
        controller={control}
        controllerProps={{
          name: 'type',
          rules: { required: 'Animal type is required' },
        }}
        selectProps={{
          options,
          isSearchable: true,
          placeholder: 'Select animal type',
          value:
            post?.type && options.find((option) => option.value === post.type),
        }}
      />

      <InputGroup
        id="location"
        label="Location"
        value={
          post?.location
            ? Object.values(post.location)
            : Object.values(useSelector(selectLocation))
        }
        readOnly
      />

      <InputGroup
        id="description"
        label="Description"
        as="textarea"
        error={errors?.description?.message}
        {...register('description')}
        defaultValue={post?.description}
      />

      <Button variant="primary" isFullWidth size="lg" type="submit">
        {submitText}
      </Button>
    </VStack>
  );
};

PostForm.propTypes = {
  post: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PostForm;
