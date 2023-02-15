import React from 'react';
import { Box, Button } from '@mui/material';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box component="header" sx={{ py: 3 }}>
      <Button
        variant="contained"
        color="success"
        size="large"
        onClick={() => navigate(routes.ProductCreatePage)}
      >
        Create Product
      </Button>
    </Box>
  );
};

export default Header;
