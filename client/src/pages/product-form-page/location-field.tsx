import React from 'react'; import {
  Typography,
  TextField,
  Box,
} from '@mui/material';

const LocationField = () => (
  <Box>
    <Typography variant="subtitle1" sx={{ pl: 1 }}>Location</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField label="Country" fullWidth variant="filled" name="country" required />
      <TextField label="City" fullWidth variant="filled" name="city" required />
    </Box>
  </Box>
);

export default LocationField;
