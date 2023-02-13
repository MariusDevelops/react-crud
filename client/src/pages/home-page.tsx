import React from 'react';
import { Box } from '@mui/material';
import ApiService from 'services/api-service';

const HomePage = () => {
  const [products, setProducts] = React.useState<ProductModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedProducts = await ApiService.fetchProducts();
      setProducts(fetchedProducts);
    })();
  }, []);

  return (
    <Box sx={{ p: 2, border: '1px dashed grey', backgroundColor: 'lightBlue' }}>
      <Box component="pre" sx={{ p: 2, border: '1px dashed grey', backgroundColor: 'lightgrey' }}>
        {JSON.stringify(products, null, 4)}
      </Box>
    </Box>
  );
};

export default HomePage;
