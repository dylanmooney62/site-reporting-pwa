import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';

const DrawerMenu = ({ onDelete, onEdit }) => (
  <Menu>
    <MenuButton
      aria-label="Options"
      variant="ghost"
      as={IconButton}
      icon={<FiMoreVertical />}
    />
    <MenuList>
      <MenuItem icon={<FiEdit />} onClick={onEdit}>
        Edit
      </MenuItem>
      <MenuItem icon={<FiTrash />} color="red.400" onClick={onDelete}>
        Delete
      </MenuItem>
    </MenuList>
  </Menu>
);

DrawerMenu.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default DrawerMenu;
