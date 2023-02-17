import React from 'react'; import {
  Typography,
  TextField,
  Box,
} from '@mui/material';

const DetailsField = () => (
  <Box>
    <Typography variant="subtitle1" sx={{ pl: 1 }}>Details</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField label="Material" fullWidth variant="filled" name="material" required />
      <TextField label="Sizes" fullWidth variant="filled" name="sizes" required />
    </Box>
  </Box>
);

export default DetailsField;
