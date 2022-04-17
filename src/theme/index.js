// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
  styles: {
    global: {
      ':root': {
        '--sat': 'env(safe-area-inset-top)',
        '--sar': 'env(safe-area-inset-right)',
        '--sab': 'env(safe-area-inset-bottom)',
        '--sal': 'env(safe-area-inset-left)',
      },
      html: {
        minHeight: 'calc(100% + env(safe-area-inset-top))',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#27272B',
        overflow: 'hidden',
        paddingTop: 'env(safe-area-inset-top)',
      },
      'body, #root': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden',
      },
      '.chakra-modal__content-container': {
        height: '100vh !important',
      },
    },
  },
  config,
  fonts: {
    title: 'Amaranth, sans-serif',
    heading: 'Open Sans, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  colors: {
    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
  },
  components: {
    Spinner: {
      baseStyle: {
        borderWidth: '4px',
        color: 'blue.400',
        animationDuration: '0.66s',
        borderBottomColor: 'blackAlpha.300',
        borderLeftColor: 'blackAlpha.300',
      },
      defaultProps: {
        size: 'xl',
      },
    },
  },
});

export default theme;
