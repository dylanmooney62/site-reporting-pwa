// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
