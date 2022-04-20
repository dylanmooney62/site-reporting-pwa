import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { Select } from 'chakra-react-select';

export const SelectGroup = ({
  id,
  label,
  error,
  controller,
  controllerProps = {},
  selectProps = {},
}) => (
  <FormControl isInvalid={error}>
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <Controller
      control={controller}
      {...controllerProps}
      render={({ field }) => <Select {...field} {...selectProps} />}
    />
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);

SelectGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  controller: PropTypes.object.isRequired,
  controllerProps: PropTypes.object,
  selectProps: PropTypes.object,
};
