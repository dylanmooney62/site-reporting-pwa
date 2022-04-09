import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

const SideDrawer = ({ isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose} placement="left">
    <DrawerOverlay />
    <DrawerContent>
      <DrawerBody>Drawer</DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default SideDrawer;

SideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
