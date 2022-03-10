import React from 'react';
import { Outlet } from 'react-router-dom';
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

const App = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection="column" minH="100%">
        <Navbar onOpenSideDrawer={onOpen} />
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Container maxW="container.xl" as="main" flex={1}>
          <Outlet />
        </Container>
        <BottomNavigationBar />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
