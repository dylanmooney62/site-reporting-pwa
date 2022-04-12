import React from 'react';
import Mapbox from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../features/location/locationSlice';
import useWindowDimensions from '../hooks/useWindowDimensions';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  MapViewStateUpdated,
  selectMapViewState,
} from '../features/map/mapSlice';

const MapPage = () => {
  const dimensions = useWindowDimensions();
  const dispatch = useDispatch();
  const viewState = useSelector(selectMapViewState);
  const location = useSelector(selectLocation);

  // Height is calculated from height of the screen and the height of the bottom navigation bar
  const height = dimensions.height - 64;
  const { width } = dimensions;

  const initialViewState = viewState ?? {
    latitude: location.lat,
    longitude: location.lng,
    zoom: 6,
  };

  return (
    <Mapbox
      reuseMaps
      initialViewState={initialViewState}
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
    />
  );
};

export default MapPage;
