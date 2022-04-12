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
    <>
      <Camera
        onCapture={(src) => setImageSrc(src)}
        onError={(err) => setError(err)}
      />
      {imageSrc && (
        <Overlay display="flex" flexDirection="column">
          <ImagePreview imageSrc={imageSrc} onClose={() => setImageSrc(null)} />
          <ImageControls imageSrc={imageSrc} />
        </Overlay>
      )}
    </>
  );
};

export default CameraPage;
