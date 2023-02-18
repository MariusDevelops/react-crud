import React from 'react'; import {
  Typography,
  TextField,
  Box,
} from '@mui/material';

type DetailsFieldProps = {
  defaultMaterial?: string,
  defaultSizes?: string,
};

const DetailsField: React.FC<DetailsFieldProps> = ({
  defaultMaterial,
  defaultSizes,
}) => (
  <Box>
    <Typography variant="subtitle1" sx={{ pl: 1 }}>Details</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField label="Material" fullWidth variant="filled" name="material" required defaultValue={defaultMaterial} />
      <TextField label="Sizes" fullWidth variant="filled" name="sizes" required defaultValue={defaultSizes} />
    </Box>
  </Box>
);

export default DetailsField;
