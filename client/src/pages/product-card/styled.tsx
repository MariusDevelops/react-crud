import { Stack, Box, styled } from '@mui/material';

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2),
}));

export const Price = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'flex-end',
  fontSize: '1.3rem',
  backgroundColor: theme.palette.warning.main,
  // backgroundColor: '#ffeb3b',
  // color: theme.palette.warning.light,
  gap: theme.spacing(0.2),
  fontWeight: 600,
  '&:after': {
    content: '"Eur"',
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
  '&>*': {
    flexGrow: 1,
  },
}));
