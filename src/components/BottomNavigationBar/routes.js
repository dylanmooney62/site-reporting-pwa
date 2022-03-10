import { FiHome, FiMapPin, FiCamera, FiMessageSquare } from 'react-icons/fi';

export default [
  {
    to: '/',
    label: 'Home',
    icon: FiHome,
    activeColor: 'blue.400',
  },
  {
    to: '/map',
    label: 'Map',
    icon: FiMapPin,
    activeColor: 'green.400',
  },
  {
    to: '/camera',
    label: 'Camera',
    icon: FiCamera,
    activeColor: 'orange.400',
  },
  {
    to: '/chat',
    label: 'Chat',
    icon: FiMessageSquare,
    activeColor: 'yellow.400',
  },
];
