import { createTheme } from '@mui/material';

// sukuria temą, default temos pagrindu.
const theme = createTheme({
  zIndex: {
    appBar: 1250,
  },
  palette: {
    primary: {
      main: '#212121',
      dark: '#c62828',
    },
    success: {
      main: '#212121',
      dark: '#c62828',
    },
    warning: {
      main: '#212121',
      dark: '#c62828',
    },
    error: {
      main: '#212121',
      dark: '#c62828',
    },
  },
});

export default theme;
