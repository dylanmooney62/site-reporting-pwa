import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

export const InputGroup = React.forwardRef(
  ({ id, label, error, as = 'input', ...inputProps }, ref) => {
    let InputComponent;

    switch (as) {
      case 'textarea':
        InputComponent = Textarea;
        break;
      default:
        InputComponent = Input;
    }

    return (
      <FormControl isInvalid={error}>
        {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
        <InputComponent {...inputProps} id={id} ref={ref} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  }
);

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea', 'select']),
};
