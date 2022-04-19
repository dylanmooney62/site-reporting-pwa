/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { RemoveScroll } from 'react-remove-scroll';
import { ChakraProvider, Flex } from '@chakra-ui/react';

import {
  getLocation,
  selectLocationStatus,
} from './features/location/locationSlice';

import theme from './theme';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/amaranth/400.css';
import SplashScreen from './app/SplashScreen';
import BottomNavigationBar from './components/BottomNavigationBar';
import { useIsNestedRoute } from './hooks/useIsNestedRoute';
import { getPosts, selectPostsStatus } from './features/post/postsSlice';
import { BackButton } from './components/BackButton';

const App = () => {
  const dispatch = useDispatch();
  const locationStatus = useSelector(selectLocationStatus);
  const postStatus = useSelector(selectPostsStatus);

  const isNestedRoute = useIsNestedRoute();

  useEffect(() => {
    if (locationStatus === 'idle') {
      setTimeout(() => {
        dispatch(getLocation());
        dispatch(getPosts());
      }, 1000);
    }
  }, [dispatch, locationStatus]);

  let content;

  const locLoading = locationStatus === 'loading' || locationStatus === 'idle';
  const postLoading = postStatus === 'loading';

  const isLoading = locLoading || postLoading;

  // Display the splash screen if the location is still loading
  if (isLoading) {
    content = <SplashScreen />;
  } else {
    content = (
      <RemoveScroll forwardProps>
        <Flex flexDirection="column" flex={1}>
          {isNestedRoute && <BackButton />}
          <Outlet />
          {!isNestedRoute && <BottomNavigationBar />}
        </Flex>
      </RemoveScroll>
    );
  }

  return <ChakraProvider theme={theme}>{content}</ChakraProvider>;
};

export default App;
