/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import {
  Stack,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';

type ProductCardProps = ProductModel;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  images,
  details,
}) => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ boxShadow: 3, position: 'relative' }}>
      <Img src={images[1]} alt="" sx={{ aspectRatio: 'auto', width: 1 }} />
      <Styled.AdminActions>
        <Button
          variant="contained"
          color="warning"
          size="small"
          onClick={() => navigate(routes.ProductUpdatePage.createLink(id))}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => {
            axios.delete(`http://localhost:5024/products/${id}`)
              .then((response) => {
                window.location.reload();
                console.log('Product deleted:', response.data);
              })
              .catch((error) => {
                console.error('Error deleting product:', error);
              });
          }}
        >
          Delete
        </Button>
      </Styled.AdminActions>
      <Styled.ContentWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{name}</Typography>
          <Box sx={{ fontSize: '1rem', fontWeight: 'light' }}>{description}</Box>
          <Styled.Price sx={{ my: 1 }}>{price}</Styled.Price>
          <Box sx={{ float: 'inline-end', textAlign: 'right' }}>
            <Typography component="h3" sx={{ color: 'grey.500', fontSize: '1.1rem' }}>
              {`Material: ${details.material}`}
            </Typography>
            <Typography component="h3" sx={{ color: 'grey.500', fontSize: '1.1rem' }}>
              {`Size: ${details.sizes}`}
            </Typography>
          </Box>
        </Box>
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined">Remeber</Button>
          <Button
            // sx={{ mt: 2, color: 'black', borderColor: 'black' }}
            color="primary"
            variant="contained"
            onClick={() => navigate(routes.ProductPage.createLink(id))}
          >
            DETAILS
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>
  );
};

export default ProductCard;
