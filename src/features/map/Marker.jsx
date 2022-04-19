import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from '@chakra-ui/react';
import { Marker as MapboxMarker } from 'react-map-gl';
import { IoIosPaw } from 'react-icons/io';

const Marker = React.memo(({ lat, lng, onClick, ...props }) => (
  <MapboxMarker latitude={lat} longitude={lng} onClick={onClick} {...props}>
    <Icon as={IoIosPaw} color="blue.300" w={8} h={8} />
  </MapboxMarker>
));

Marker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Marker;
