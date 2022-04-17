/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { RemoveScroll } from 'react-remove-scroll';
import { ChakraProvider, Flex, useDisclosure } from '@chakra-ui/react';

import {
  getLocation,
  selectLocationStatus,
} from './features/location/locationSlice';

import theme from './theme';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/amaranth/400.css';
import SplashScreen from './app/SplashScreen';
import Navbar from './components/Navbar';
import BottomNavigationBar from './components/BottomNavigationBar';
import { useIsNestedRoute } from './hooks/useIsNestedRoute';

const App = () => {
  const dispatch = useDispatch();
  const locationStatus = useSelector(selectLocationStatus);

  const isNestedRoute = useIsNestedRoute();

  useEffect(() => {
    if (locationStatus === 'idle') {
      dispatch(getLocation());
    }
  }, [dispatch, locationStatus]);

  let content;

  // Display the splash screen if the location is still loading
  if (locationStatus === 'loading' || locationStatus === 'idle') {
    content = <SplashScreen />;
  } else {
    content = (
      <RemoveScroll forwardProps>
        <Flex flexDirection="column" flex={1}>
          {isNestedRoute && <Navbar />}
          <Outlet />
          {!isNestedRoute && <BottomNavigationBar />}
        </Flex>
      </RemoveScroll>
    );
  }

  return <ChakraProvider theme={theme}>{content}</ChakraProvider>;
};

export default App;
