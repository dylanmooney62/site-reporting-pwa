import React, { useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from 'react-map-gl';

import { MapViewStateUpdated, selectMapViewState } from './mapSlice';
import { selectPosts } from '../post/postsSlice';

import Marker from './Marker';
import PostDrawer from '../post/PostDrawer/PostDrawer';

import 'mapbox-gl/dist/mapbox-gl.css';
import { selectLocation } from '../location/locationSlice';

const ReactMap = () => {
  const dispatch = useDispatch();

  const viewState = useSelector(selectMapViewState);
  const posts = useSelector(selectPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const userLocation = useSelector(selectLocation);

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
      <Map
        ref={mapRef}
        reuseMap
        initialViewState={
          viewState ?? {
            latitude: userLocation?.lat,
            longitude: userLocation?.lng,
            zoom: 6,
          }
        }
        onMoveEnd={(e) => dispatch(MapViewStateUpdated(e.viewState))}
        style={{
          position: 'fixed',
          top: 0,
          height: 'calc(100vh - 64px)',
          width: '100vw',
        }}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      >
        {markers}
      </Map>

      <PostDrawer post={selectedPost} />
    </>
  );
};

export default ReactMap;
