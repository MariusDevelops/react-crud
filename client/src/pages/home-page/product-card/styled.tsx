import { Stack, Box, styled } from '@mui/material';

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2),
}));

export const AdminActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  gap: theme.spacing(1),
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

export const Price = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'flex-end',
  fontSize: '1.3rem',
  // backgroundColor: theme.palette.warning.main,
  // backgroundColor: '#ffeb3b',
  color: theme.palette.warning.dark,
  gap: theme.spacing(0.2),
  fontWeight: 600,
  '&:after': {
    content: '"€"',
  },
}));

export const Rating = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'flex-end',
  fontSize: '1.3rem',
  color: '#ff9800',
  gap: theme.spacing(0.2),
  fontWeight: 600,
  '&:after': {
    content: '"★"',
  },
}));
