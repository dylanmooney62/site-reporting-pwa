/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ReactWebcam from 'react-webcam';
import { FiCircle } from 'react-icons/fi';
import { chakra, Flex, IconButton } from '@chakra-ui/react';

const Webcam = chakra(ReactWebcam);

const Camera = ({ onCapture, onError }) => {
  const webcamRef = useRef(null);

  const handleCapture = React.useCallback(() => {
    onCapture(webcamRef.current.getScreenshot());
  }, [webcamRef]);

  return (
    <Flex
      direction="column"
      flex={1}
      pos="relative"
      overflow="hidden"
      px={2}
      pb={2}
    >
      <Webcam
        height="100%"
        flex={1}
        ref={webcamRef}
        videoConstraints={{ facingMode: 'environment' }}
        screenshotFormat="image/webp"
        objectFit="cover"
        objectPosition="center"
        borderRadius="xl"
        onUserMediaError={onError}
        forceScreenshotSourceSize
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
  onError: PropTypes.func.isRequired,
};

export default Camera;
