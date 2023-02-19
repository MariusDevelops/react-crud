import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
// import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useProduct from 'hooks/useProduct';

const ProductPage = () => {
  const { id } = useParams();
  const product = useProduct(id);

  // const [product, setProduct] = React.useState<ProductModel | undefined>(undefined);

  // React.useEffect(() => {
  //   if (id !== undefined) {
  //     (async () => {
  //       const fetchedProducts = await ApiService.fetchProduct(id);

  //       setProduct(fetchedProducts);
  //     })();
  //   }
  // }, [id]);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (!product) return null;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        my: 4,
        margin: 'auto',
        maxWidth: '1200px',
        justifyContent: 'center',
        alignItems: 'center',
        width: {
          xs: '100%', sm: '90%', md: '80%', lg: '70%',
        },
      }}
    >
      <Grid
        item
        sx={{ my: 4, mx: 'auto' }}
      >
        {product && (
          <Box sx={{
            mx: 'auto',
            width: 500,
            '@media (max-width: 600px)': {
              width: '300px',
            },
            '@media (max-width: 350px)': {
              width: '250px',
            },
          }}
          >
            <Slider {...sliderSettings}>
              {product.images.map((imageUrl) => (
                <img key={imageUrl} src={imageUrl} alt={product.name} />
              ))}
            </Slider>
          </Box>
        )}
      </Grid>
      <Grid
        item
        sx={{ my: 4, mx: 'auto' }}
      >
        {product && (
          <Box sx={{
            ml: 2,
            width: 300,
            '@media (max-width: 350px)': {
              width: '200px',
            },
          }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>{product.name}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>{product.description}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Price:
              {' '}
              {product.price}
              {' €'}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Material:
              {' '}
              {product.details.material}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Sizes:
              {' '}
              {product.details.sizes}
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default ProductPage;
