import React from 'react';
import { Fade, Text } from '@chakra-ui/react';

const HomePage = () => (
  <Fade in unmountOnExit>
    <Text fontSize="lg">This is the Home page</Text>
  </Fade>
);

export default HomePage;
