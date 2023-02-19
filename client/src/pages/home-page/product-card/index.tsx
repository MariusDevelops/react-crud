import React, { useState } from 'react';
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
  price,
  images,
  details,
  rating,
}) => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    axios.delete(`http://localhost:5024/products/${id}`)
      .then((response) => {
        console.log('Product deleted:', response.data);
        setIsDeleted(true);
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  if (isDeleted) {
    return null;
  }

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
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Styled.AdminActions>
      <Styled.ContentWrapper>
        <Box sx={{
          flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}
        >
          <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{name}</Typography>
          <Box>
            <Styled.Price sx={{ my: 1 }}>{price}</Styled.Price>
            <Styled.Rating sx={{ float: 'right' }}>{rating}</Styled.Rating>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography component="h3" sx={{ color: 'grey.500', fontSize: '1.1rem' }}>
              {`Material: ${details.material}`}
            </Typography>
            <Typography component="h3" sx={{ color: 'grey.500', fontSize: '1.1rem' }}>
              {`Size: ${details.sizes}`}
            </Typography>
          </Box>
        </Box>
        <Button
          sx={{ mt: 2 }}
          color="primary"
          variant="contained"
          onClick={() => navigate(routes.ProductPage.createLink(id))}
        >
          DETAILS
        </Button>
      </Styled.ContentWrapper>
    </Stack>
  );
};

export default ProductCard;
