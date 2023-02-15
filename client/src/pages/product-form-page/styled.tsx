import React from 'react';
import {
  Paper as MuiPaper,
  PaperProps,
  Stack,
  styled,
} from '@mui/material';

export const Container = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  alignItems: 'center',

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Form = React.forwardRef(
  (
    props: Omit<PaperProps<'form'>, 'component' | 'ref'>,
    ref: PaperProps<'form'>['ref'],
  ) => <MuiPaper component="form" ref={ref} {...props} />,
);
export const PaperForm = styled(Form)(({ theme }) => ({
  padding: theme.spacing(3),

  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.breakpoints.values.sm}px - ${theme.spacing(4)})`,
  },
}));
