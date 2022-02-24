import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/common/Navbar';
import BottomNavigationBar from './components/common/BottomNavigationBar';
// import Navbar from './components/common/Navbar';

const App = () => (
  <ChakraProvider theme={theme}>
    <Flex flexDirection="column" minH="100vh">
      <Navbar />
      <Container maxW="container.xl" as="main" flex={1}>
        <Outlet />
      </Container>
      <BottomNavigationBar />
    </Flex>
  </ChakraProvider>
);

export default App;
