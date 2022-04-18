/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactWebcam from 'react-webcam';
import { FiCircle } from 'react-icons/fi';
import { chakra, Fade, Flex, IconButton } from '@chakra-ui/react';

const Webcam = chakra(ReactWebcam);

const Camera = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const handleCapture = React.useCallback(() => {
    onCapture(webcamRef.current.getScreenshot());
  }, [webcamRef]);

  return (
    <Flex direction="column" pos="relative">
      <Webcam
        ref={webcamRef}
        videoConstraints={{
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        }}
        screenshotFormat="image/webp"
        borderRadius="xl"
        imageSmoothing={false}
        screenshotQuality={1}
      />
      <Flex justifyContent="center" pos="absolute" bottom={8} left="0" w="full">
        <IconButton
          h="64px"
          w="64px"
          icon={<FiCircle size="4rem" style={{ strokeWidth: 2 }} />}
          variant="ghost"
          onClick={handleCapture}
        />
      </Flex>
    </Flex>
  );
};

Camera.propTypes = {
  onCapture: PropTypes.func.isRequired,
};

export default Camera;
