import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './navbar/navbar';

const NavbarLayout = () => (
  <Box component="div">
    <Navbar />
    <Box component="main">
      <Outlet />
    </Box>
  </Box>
);

export default NavbarLayout;
