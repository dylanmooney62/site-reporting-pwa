import { FiHome, FiMapPin, FiCamera } from 'react-icons/fi';

export default [
  {
    to: '/',
    label: 'Home',
    icon: FiHome,
    activeColor: 'blue.400',
  },
  {
    to: '/camera',
    label: 'Camera',
    icon: FiCamera,
    activeColor: 'yellow.400',
  },
  {
    to: '/map',
    label: 'Map',
    icon: FiMapPin,
    activeColor: 'green.400',
  },
];
