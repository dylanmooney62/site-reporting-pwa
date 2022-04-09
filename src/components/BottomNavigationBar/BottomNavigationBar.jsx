import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import BottomNavigationBarButton from './BottomNavigationBarButton';
import routes from './routes';
import { useSafeArea } from '../../hooks/useSafeArea';

const BottomNavigationBar = () => (
  <Box marginTop="auto" bg="gray.900" pb={useSafeArea().bottom}>
    <Container maxW="container.xl">
      <Flex
        h={16}
        alignItems="center"
        justifyContent={['space-between', 'space-evenly']}
        px={[3, 0]}
      >
        {routes.map((route) => (
          <BottomNavigationBarButton {...route} key={route.label} />
        ))}
      </Flex>
    </Container>
  </Box>
);
export default BottomNavigationBar;
