/* eslint-disable */
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>Drawer</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SideDrawer;
