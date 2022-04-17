import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/react';
import { FiMinus } from 'react-icons/fi';

const BottomSheet = ({ spacing, children, ...props }) => (
  <Box
    pos="relative"
    zIndex={200}
    overflow="hidden"
    bgColor="gray.800"
    borderTopRadius="xl"
    px={4}
    pb="var(--sab)"
    marginTop={spacing}
    {...props}
  >
    <Flex
      justifyContent="center"
      transform="auto"
      translateY={-2}
      w="full"
      color="gray.500"
    >
      <FiMinus size="4rem" />
    </Flex>
    {children}
  </Box>
);

BottomSheet.propTypes = {
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
};

export default BottomSheet;
