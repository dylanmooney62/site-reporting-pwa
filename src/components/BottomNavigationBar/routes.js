import { FiHome, FiMap, FiCamera } from 'react-icons/fi';

export default [
  {
    to: '/map',
    label: 'Map',
    icon: FiMap,
    activeColor: 'green.400',
  },
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
];
