import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { RemoveScroll } from 'react-remove-scroll';
import {
  ChakraProvider,
  Container,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import BottomNavigationBar from './components/BottomNavigationBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import {
  getLocation,
  selectLocationStatus,
} from './features/location/locationSlice';

import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/amaranth/400.css';

import SplashScreen from './app/SplashScreen';

const App = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const dispatch = useDispatch();

  const locationStatus = useSelector(selectLocationStatus);

  useEffect(() => {
    if (locationStatus === 'idle') {
      dispatch(getLocation());
    }
  }, [dispatch, locationStatus]);

  let content;

  if (locationStatus === 'loading') {
    content = <SplashScreen />;
  } else {
    content = (
      <RemoveScroll forwardProps>
        <Flex flexDirection="column" flex={1}>
          <Navbar onOpenSideDrawer={onOpen} />
          <SideDrawer isOpen={isOpen} onClose={onClose} />
          <Container
            maxW="container.xl"
            as="main"
            display="flex"
            flexDirection="column"
            flex={1}
          >
            <Outlet />
          </Container>
          <BottomNavigationBar />
        </Flex>
      </RemoveScroll>
    );
  }

  return <ChakraProvider theme={theme}>{content}</ChakraProvider>;
};

export default App;
