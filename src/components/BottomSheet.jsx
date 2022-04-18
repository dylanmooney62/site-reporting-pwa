import React from 'react';
import PropTypes from 'prop-types';
import {
  forwardRef,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { FiMinus } from 'react-icons/fi';

const BottomSheet = forwardRef(
  ({ onClose, isOpen, children, top = '50vh', ...props }, ref) => (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="outside"
      motionPreset="slideInBottom"
      autoFocus={false}
      size="xl"
      {...props}
      ref={ref}
    >
      <ModalOverlay />
      <ModalContent top={top} borderRadius="xl">
        <Icon as={FiMinus} mx="auto" w={12} h={12} color="gray.400" />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
);

BottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  top: PropTypes.string,
};

export default BottomSheet;
