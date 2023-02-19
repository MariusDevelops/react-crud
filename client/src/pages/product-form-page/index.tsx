import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import {
  Button,
  Box,
  Stack,
  TextField,
  Typography,
  Rating,
} from '@mui/material';

import useProduct from 'hooks/useProduct';
import ImagesField from './images-field';
import DetailsField from './details-field';
import * as Styled from './styled';
import { btnColorMap, btnMap, titleMap } from './data';
import { formatValues } from './helpers';

type ProductFormPageProps = {
  mode?: 'create' | 'update'
};

const ProductFormPage: React.FC<ProductFormPageProps> = ({ mode = 'create' }) => {
  const navigate = useNavigate();
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const { id } = useParams();
  const product = useProduct(id);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      if (mode === 'create') {
        console.log('Daromas Sukūrimas');
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
      } else {
        console.log('Daromas Atnaujinimas, id:', id);
        console.log(values);
        fetch(`http://localhost:5024/products/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }).then((response) => {
          if (response.ok) {
            console.log('Product updated successfully');
            navigate('/');
          } else {
            console.error('Failed to update product');
          }
        });
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  if (mode === 'update' && product === undefined) return null;

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>{titleMap[mode]}</Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField label="Title" fullWidth variant="filled" name="name" required defaultValue={product?.name} />
          <TextField
            label="Description"
            fullWidth
            variant="filled"
            name="description"
            multiline
            rows={4}
            required
            defaultValue={product?.description}
          />
          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
            defaultValue={product ? product.price.toString().slice(0, -1) : ''}
          />
          <DetailsField
            defaultMaterial={product?.details.material}
            defaultSizes={product?.details.sizes}
          />
          <ImagesField defaultImages={product?.images} />
          <Box>
            <Typography component="legend">Rating</Typography>
            <Rating name="rating" defaultValue={product?.rating} />
          </Box>
          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color={btnColorMap[mode]}
              variant="contained"
              size="large"
            >
              {btnMap[mode]}
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default ProductFormPage;
