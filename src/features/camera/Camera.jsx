import React, { useRef } from 'react';
import ReactWebcam from 'react-webcam';
import { FiCircle } from 'react-icons/fi';
import { chakra, Flex, Icon, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Webcam = chakra(ReactWebcam);

const videoConstraints = {
  facingMode: 'environment',
  width: { ideal: 1920 },
  height: { ideal: 1080 },
};

const Camera = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const handleCapture = React.useCallback(() => {
    navigate('/post/new', {
      replace: true,
      state: { image: webcamRef.current.getScreenshot() },
    });
  }, [webcamRef]);

  return (
    <Flex
      flex={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
      pos="relative"
      p={2}
    >
      <Webcam
        ref={webcamRef}
        videoConstraints={videoConstraints}
        screenshotFormat="image/webp"
        borderRadius="xl"
        imageSmoothing={false}
        screenshotQuality={1}
      />
      <IconButton
        pos="absolute"
        bottom={16}
        variant="ghost"
        icon={<Icon as={FiCircle} strokeWidth={2} w={20} h={20} />}
        onClick={handleCapture}
      />
    </Flex>
  );
};

export default Camera;
