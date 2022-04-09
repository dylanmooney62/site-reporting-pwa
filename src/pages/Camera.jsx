/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  Center,
  chakra,
  HStack,
  IconButton,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import Webcam from 'react-webcam';
import { FiRefreshCw, FiCircle } from 'react-icons/fi';
import useWindowDimensions from '../hooks/useWindowDimensions';

const videoConstraints = {
  aspectRatio: 0.5625,
  width: { ideal: 1080, max: 1080 },
  height: { ideal: 1920, max: 1920 },
};

const Camera = () => {
  const { width, height } = useWindowDimensions();

  const [facingMode, setFacingMode] = useState('user');
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput')),
    [setDevices]
  );

  const handleToggleFacingMode = () => {
    if (facingMode === 'user') {
      setFacingMode('environment');
    } else {
      setFacingMode('user');
    }
  };

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <ChakraWebCam
        position="fixed"
        left="0"
        top="0"
        width={width}
        height={height - 64}
        objectFit="cover"
        objectPosition="center"
        mirrored={facingMode === 'user'}
        videoConstraints={{}}
      />
      <Box marginTop="auto" marginLeft="auto" marginRight="auto" pb={16}>
        <HStack spacing={6}>
          <Box width="40px" />

          <IconButton
            icon={
              <FiCircle
                style={{ height: '5.2rem', width: '5.2rem', strokeWidth: 1.2 }}
              />
            }
            variant="ghost"
          />
          <Box width="40px">
            {devices.length > 1 && (
              <IconButton
                icon={
                  <FiRefreshCw style={{ height: '1.6rem', width: '1.6rem' }} />
                }
                onClick={handleToggleFacingMode}
                variant="ghost"
              />
            )}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

const ChakraWebCam = chakra(Webcam);

export default Camera;
