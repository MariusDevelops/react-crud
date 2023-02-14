import { createTheme } from '@mui/material';

// sukuria temą, default temos pagrindu.
const theme = createTheme({
  zIndex: {
    appBar: 1250,
  },
  palette: {
    warning: {
      main: '#ffeb3b',
    },
  },
});

export default theme;
