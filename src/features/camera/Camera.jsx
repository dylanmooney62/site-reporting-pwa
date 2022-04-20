/* eslint-disable no-unused-vars */
import React, { useCallback, useRef } from 'react';
import ReactWebcam from 'react-webcam';
import { Center, chakra, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CameraButton from './CameraButton';

const Webcam = chakra(ReactWebcam);

const Camera = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const handleCapture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    navigate('/post/new', { state: { image } });
  }, [webcamRef]);

  return (
    <Center flex={1} my="auto" display="flex" pos="relative">
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        screenshotQuality={1}
        borderRadius="xl"
        imageSmoothing={false}
        videoConstraints={{
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        }}
      />
      <CameraButton onCapture={handleCapture} />
    </Center>
  );
};

export default Camera;
