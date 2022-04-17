/* eslint-disable no-unused-vars */
import React, { useRef, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Mapbox, { Marker } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { IoIosPaw } from 'react-icons/io';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapViewStateUpdated, selectMapViewState } from './mapSlice';
import { selectPosts } from '../post/postsSlice';

const MapGL = ({ onMarkerClick }) => {
  const dispatch = useDispatch();

  const viewState = useSelector(selectMapViewState);
  const posts = useSelector(selectPosts);

  const dimensions = useWindowDimensions();
  const mapRef = useRef();

  // Height is calculated from height of the screen and the height of the bottom navigation bar
  const height = dimensions.height - 64;
  const { width } = dimensions;

  const handleClick = useCallback(
    (post) => {
      mapRef.current?.flyTo({
        center: [post.location.lng, post.location.lat],
        zoom: 16,
        duration: 1000,
      });

      onMarkerClick(post);
    },
    [posts]
  );

  const markers = useMemo(
    () =>
      posts.map((post) => (
        <Marker
          key={post.id}
          longitude={post.location.lng}
          latitude={post.location.lat}
          onClick={() => handleClick(post)}
        >
          <Box color="blue.200" p={2}>
            <IoIosPaw size={24} />
          </Box>
        </Marker>
      )),
    [posts]
  );

  return (
    <Mapbox
      ref={mapRef}
      reuseMaps
      initialViewState={viewState}
      onMoveEnd={(e) => dispatch(MapViewStateUpdated(e.viewState))}
      style={{
        width,
        height: `calc(${height}px - var(--sab))`,
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 10,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    >
      {markers}
    </Mapbox>
  );
};

MapGL.propTypes = {
  onMarkerClick: PropTypes.func.isRequired,
};

export default MapGL;
