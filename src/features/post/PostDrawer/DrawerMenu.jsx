import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { FiEdit, FiMoreVertical, FiTrash } from 'react-icons/fi';

const PostDetailDrawerMenu = () => (
  <Menu>
    <MenuButton
      aria-label="Options"
      variant="ghost"
      as={IconButton}
      icon={<FiMoreVertical />}
    />
    <MenuList>
      <MenuItem icon={<FiEdit />}>Edit</MenuItem>
      <MenuItem icon={<FiTrash />} color="red.400">
        Delete
      </MenuItem>
    </MenuList>
  </Menu>
);

export default PostDetailDrawerMenu;
