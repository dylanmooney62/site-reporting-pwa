/* eslint-disable no-unused-vars */
import React, { useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactMapGL from 'react-map-gl';

import { Box } from '@chakra-ui/react';
import { MapViewStateUpdated, selectMapViewState } from './mapSlice';
import { selectPosts } from '../post/postsSlice';

import Marker from './Marker';
import PostDrawer from '../post/PostDrawer/PostDrawer';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css';

const MapGL = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const viewState = useSelector(selectMapViewState);
  const posts = useSelector(selectPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  const mapRef = useRef();

  const handleClick = useCallback(
    ({ id, location }) => {
      mapRef.current?.flyTo({
        center: [location.lng, location.lat],
        zoom: 16,
        duration: 1000,
      });

      setSelectedPost({ ...posts.find((p) => p.id === id) });
    },
    [posts]
  );

  // eslint-disable-next-line no-unused-vars
  const markers = posts.map((post) => (
    <Marker
      key={post.id}
      lat={post.location.lat}
      lng={post.location.lng}
      onClick={() => handleClick(post)}
    />
  ));

  return (
    <>
      <ReactMapGL
        ref={mapRef}
        reuseMap
        initialViewState={viewState}
        onMoveEnd={(e) => dispatch(MapViewStateUpdated(e.viewState))}
        style={{
          position: 'absolute',
          height: 'calc(100vh - 64px)',
          width: '100vw',
        }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
        {markers}
      </ReactMapGL>
      <PostDrawer post={selectedPost} />
    </>
  );
};

export default MapGL;
