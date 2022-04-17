import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Overlay from '../components/Overlay';
import Camera from '../features/camera/Camera';
import ImageControls from '../features/camera/ImageControls';
import ImagePreview from '../features/camera/ImagePreview';

const CameraPage = () => {
  const [imageSrc, setImageSrc] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  return (
    <Box p={2} pt="var(--sat)" flex={1} display="flex">
      <Camera
        onCapture={(src) => setImageSrc(src)}
        onError={(err) => setError(err)}
      />
      {imageSrc && (
        <Overlay display="flex" flexDirection="column" pt="var(--sat)">
          <ImagePreview imageSrc={imageSrc} onClose={() => setImageSrc(null)} />
          <ImageControls imageSrc={imageSrc} />
        </Overlay>
      )}
    </Box>
  );
};

export default CameraPage;
