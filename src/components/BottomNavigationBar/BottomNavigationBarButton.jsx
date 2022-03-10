import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { DarkMode, IconButton } from '@chakra-ui/react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const BottomNavigationBarButton = ({ icon, label, to, activeColor }) => {
  const resolved = useResolvedPath(to);
  const isMatch = useMatch({ path: resolved.pathname, end: true });

  return (
    <DarkMode>
      <IconButton
        variant="ghost"
        size="lg"
        aria-label={label}
        icon={createElement(icon)}
        to={to}
        as={Link}
        color={isMatch && activeColor}
      />
    </DarkMode>
  );
};

BottomNavigationBarButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
  activeColor: PropTypes.string.isRequired,
};

export default BottomNavigationBarButton;
