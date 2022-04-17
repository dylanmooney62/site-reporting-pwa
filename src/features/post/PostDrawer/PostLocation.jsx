import React from 'react';
import PropTypes from 'prop-types';
import { HStack, Text } from '@chakra-ui/react';
import { FiMapPin } from 'react-icons/fi';

const PostDetailLocation = ({ location }) => (
  <HStack alignItems="top" color="gray.400">
    <FiMapPin size={18} />
    <Text fontSize="sm" color="gray.200">
      {[
        location.lat.toString().slice(0, 8),
        location.lng.toString().slice(0, 8),
      ].join(', ')}
    </Text>
  </HStack>
);

PostDetailLocation.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default PostDetailLocation;
