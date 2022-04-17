import React from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box position="fixed" zIndex={100} mx={2} mt={10}>
      <Flex alignItems="center" justifyContent="space-between">
        <IconButton
          icon={<HiArrowLeft size={24} />}
          onClick={() => navigate(-1, { replace: true })}
          size="lg"
          variant="ghost"
          borderRadius={100}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
