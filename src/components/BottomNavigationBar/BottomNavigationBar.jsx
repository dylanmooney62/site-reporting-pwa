import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import BottomNavigationBarButton from './BottomNavigationBarButton';
import routes from './routes';

const BottomNavigationBar = () => (
  <Box
    marginTop="auto"
    bg="gray.900"
    pb="var(--sab)"
    position="relative"
    zIndex="200"
  >
    <Container maxW={['container.sm']}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={[8, 0]}
      >
        {routes.map((route) => (
          <BottomNavigationBarButton {...route} key={route.label} />
        ))}
      </Flex>
    </Container>
  </Box>
);

export default BottomNavigationBar;
