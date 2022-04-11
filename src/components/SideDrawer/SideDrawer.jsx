import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';

const SideDrawer = ({ isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose} placement="left">
    <DrawerOverlay />
    <DrawerContent bg="gray.900" pt="var(--sat)" pb="var(--sab)">
      <DrawerCloseButton onClick={onClose} top="calc(0.5rem + var(--sat))" />
      <DrawerHeader>AnimalSnap</DrawerHeader>
      <DrawerBody>Drawer</DrawerBody>
    </DrawerContent>
  </Drawer>
);

SideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SideDrawer;
