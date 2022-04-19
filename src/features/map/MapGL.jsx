/* eslint-disable no-unused-vars */
import React, { useRef, useMemo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Mapbox from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';

import 'mapbox-gl/dist/mapbox-gl.css';
import { MapViewStateUpdated, selectMapViewState } from './mapSlice';
import { selectPosts } from '../post/postsSlice';
import Marker from './Marker';

import PostDrawer from '../post/PostDrawer/PostDrawer';

const MapGL = () => {
  const dispatch = useDispatch();

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
      <Mapbox
        ref={mapRef}
        reuseMaps
        initialViewState={viewState}
        onMoveEnd={(e) => dispatch(MapViewStateUpdated(e.viewState))}
        style={{
          width: '100%',
          height: 'calc(100% + env(safe-area-inset-top))',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 10,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
        {markers}
      </Mapbox>
      <PostDrawer post={selectedPost} />
    </>
  );
};

export default MapGL;
