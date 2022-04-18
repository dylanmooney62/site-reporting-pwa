import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import MapGL from '../features/map/MapGL';
import PostDrawer from '../features/post/PostDrawer/PostDrawer';

const MapPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPost, setSelectedPost] = useState(null);

  const handleMarkerClick = (post) => {
    setSelectedPost(post);

    // Delay opening the drawer to load image before opening
    setTimeout(() => {
      onOpen();
    }, 100);
  };

  return (
    <>
      <MapGL onMarkerClick={handleMarkerClick} />
      {selectedPost && (
        <PostDrawer isOpen={isOpen} onClose={onClose} post={selectedPost} />
      )}
    </>
  );
};

export default MapPage;
