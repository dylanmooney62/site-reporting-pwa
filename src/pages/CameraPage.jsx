import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Camera from '../features/camera/Camera';

const CameraPage = () => {
  const navigate = useNavigate();

  return (
    <Flex flex={1} justifyContent="center" alignItems="center" px={2}>
      <Camera
        onCapture={(src) => navigate('/post/new', { state: { image: src } })}
      />
    </Flex>
  );
};

export default CameraPage;
