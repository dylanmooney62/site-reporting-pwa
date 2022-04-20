import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';

export const BottomSheet = ({ isOpen, onClose, children, ...props }) => (
  <Drawer
    isOpen={isOpen}
    onClose={onClose}
    placement="bottom"
    autoFocus={false}
    {...props}
  >
    <DrawerOverlay />
    <DrawerContent pb="var(--sab)" borderTopRadius="xl" pt={6}>
      <DrawerBody>{children}</DrawerBody>
    </DrawerContent>
  </Drawer>
);

BottomSheet.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
