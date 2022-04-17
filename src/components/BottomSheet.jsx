import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  forwardRef,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FiMinus } from 'react-icons/fi';

const BottomSheet = forwardRef(
  ({ onClose, isOpen, children, top, ...props }, ref) => (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="outside"
      motionPreset="slideInBottom"
      size="xl"
      {...props}
      ref={ref}
    >
      <ModalOverlay />
      <ModalContent top={top} borderRadius="xl">
        <ModalHeader display="flex" justifyContent="center">
          <Box pos="absolute" color="gray.500" transform="auto" translateY={-6}>
            <FiMinus size="4rem" />
          </Box>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  )
);

BottomSheet.propTypes = {
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  children: PropTypes.node.isRequired,
};

export default BottomSheet;
