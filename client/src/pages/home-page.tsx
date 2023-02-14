import React from 'react';
import { Box } from '@mui/material';
import ApiService from 'services/api-service';
import ProductCard from './product-card';

const HomePage = () => {
  const [products, setProducts] = React.useState<ProductModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedProducts = await ApiService.fetchProducts();
      setProducts(fetchedProducts);
    })();
  }, []);

  return (
    <Box sx={(theme) => ({
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: 2,
      padding: 2,
      maxWidth: theme.breakpoints.values.xl,
      margin: 'auto',
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    })}
    >
      {products.map((product) => <ProductCard key={product.id} {...product} />)}
    </Box>
  );
};

export default HomePage;
