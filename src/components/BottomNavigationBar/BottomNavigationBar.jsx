import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import BottomNavigationBarButton from './BottomNavigationBarButton';
import routes from './routes';

const BottomNavigationBar = () => (
  <Box marginTop="auto" bg="gray.900">
    <Container maxW="container.xl">
      <Flex h={16} alignItems="center" justifyContent="space-evenly">
        {routes.map(({ to, label, icon, activeColor }) => (
          <BottomNavigationBarButton
            to={to}
            label={label}
            icon={icon}
            activeColor={activeColor}
          />
        ))}
      </Flex>
    </Container>
  </Box>
);

export default BottomNavigationBar;
