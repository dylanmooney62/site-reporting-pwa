import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  Modal as ChakraModal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

export const ConfirmationModal = ({
  title,
  body,
  cancelText = 'Cancel',
  cancelButtonProps = {},
  confirmText = 'Confirm',
  confirmButtonProps = {},
  onCancel,
  onConfirm,
  isOpen,
  isCentered = true,
}) => (
  <ChakraModal onClose={onCancel} isOpen={isOpen} isCentered={isCentered}>
    <ModalContent mx={1}>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>{body}</Text>
      </ModalBody>
      <ModalFooter>
        <ButtonGroup>
          <Button {...cancelButtonProps} onClick={onCancel}>
            {cancelText}
          </Button>
          <Button {...confirmButtonProps} onClick={onConfirm}>
            {confirmText}
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </ModalContent>
  </ChakraModal>
);

ConfirmationModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  cancelText: PropTypes.string,
  cancelButtonProps: PropTypes.object,
  confirmText: PropTypes.string,
  confirmButtonProps: PropTypes.object,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isCentered: PropTypes.bool,
  isConfirmLoading: PropTypes.bool,
};

export default ConfirmationModal;
