import {
  Stack,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import routes from 'navigation/routes';
import React from 'react';
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
    <Stack sx={{ boxShadow: 3 }}>
      <Img src={images[1]} alt="" sx={{ aspectRatio: 'auto', width: 1 }} />
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

        <Button
          sx={{ mt: 2, color: 'black', borderColor: 'black' }}
          variant="outlined"
          onClick={() => navigate(routes.ProductPage.createLink(id))}
        >
          DETAILS

        </Button>
        <Styled.ButtonContainer />
      </Styled.ContentWrapper>
    </Stack>
  );
};

export default ProductCard;
