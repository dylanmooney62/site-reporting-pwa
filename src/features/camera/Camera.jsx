import React, { useCallback, useRef } from 'react';
import ReactWebcam from 'react-webcam';
import { Center, chakra } from '@chakra-ui/react';
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
    <Center pos="relative" flex={1} p={2}>
      <Webcam
        ref={webcamRef}
        videoConstraints={{
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        }}
        screenshotFormat="image/jpeg"
        screenshotQuality={1}
        borderRadius="xl"
        imageSmoothing={false}
      />
      <CameraButton onCapture={handleCapture} />
    </Center>
  );
};

export default Camera;
