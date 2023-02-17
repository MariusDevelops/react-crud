/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
// import {
//   Stack,
//   Typography,
//   TextField,
//   Box,
//   Button,
//   Rating,
// } from '@mui/material';
import ImagesField from './images-field';
import DetailsField from './details-field';
import * as Styled from './styled';

const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const name = formData.get('name');
  // const price = formData.get('price');
  // const rating = formData.get('rating');
  const images = formData.getAll('images');
  const material = formData.get('material');
  const sizes = formData.get('sizes');

  if (name === null || name instanceof File || name.length < 2) throw new Error('incorrect name');
  // if (price === null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
  // if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
  if (material === null || material instanceof File || material.length < 2) throw new Error('incorrect Material');
  if (sizes === null || sizes instanceof File || sizes.length < 2) throw new Error('incorrect Sizes');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  });

  return {
    name,
    details: {
      material,
      sizes,
    },
    images: images as string[],
    // price: `${Number(price).toFixed(2)}€`,
    // rating: Number(rating),
  };
};

type ProductFormPageProps = {
  mode?: 'create' | 'edit'
};

const ProductFormPage: React.FC<ProductFormPageProps> = () => {
  const navigate = useNavigate();
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      console.log(values);

      fetch('http://localhost:5024/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((response) => {
        if (response.ok) {
          console.log('Product created successfully');
          formRef.current?.reset();
          navigate('/');
        } else {
          console.error('Failed to create product');
        }
      });
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>Create Product</Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField label="name" fullWidth variant="filled" name="name" required />
          <DetailsField />
          <ImagesField />

          {/* <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
          /> */}
          {/* <Box>
            <Typography component="legend">Rating</Typography>
            <Rating name="rating" />
          </Box> */}

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Create
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default ProductFormPage;
