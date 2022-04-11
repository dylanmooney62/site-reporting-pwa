import React from 'react';
import Mapbox from 'react-map-gl';
import { useSelector } from 'react-redux';
import { selectLocation } from '../features/location/locationSlice';
import useWindowDimensions from '../hooks/useWindowDimensions';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const dimensions = useWindowDimensions();
  const location = useSelector(selectLocation);

  // Retrieve the current location from the Redux store, use london as default if not found
  const latitude = location.lat ?? -122.43;
  const longitude = location.lng ?? 37.77;

  // Height is calculated from height of the screen and the height of the bottom navigation bar
  const height = dimensions.height - 64;
  const { width } = dimensions;

  return (
    <Mapbox
      reuseMaps
      initialViewState={{ longitude, latitude, zoom: 6 }}
      style={{
        width,
        height: `calc(${height}px - var(--sab))`,
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 10,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    />
  );
};

export default Map;
