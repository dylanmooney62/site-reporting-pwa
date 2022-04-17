import React from 'react';
import PropTypes from 'prop-types';
import { HStack, Text } from '@chakra-ui/react';
import { FiCalendar } from 'react-icons/fi';
import { parseISO, formatDistanceToNowStrict } from 'date-fns';

const PostDetailDate = ({ date }) => (
  <HStack alignItems="top" color="gray.400">
    <FiCalendar size={18} />
    <Text fontSize="sm" color="gray.200">
      {date && formatDistanceToNowStrict(parseISO(date), { addSuffix: true })}
    </Text>
  </HStack>
);

PostDetailDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default PostDetailDate;
