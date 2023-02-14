import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { Box } from '@mui/material';

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = React.useState<ProductModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedProducts = await ApiService.fetchProduct(id);

        setProduct(fetchedProducts);
      })();
    }
  }, [id]);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {JSON.stringify(product, null, 4)}
    </Box>
  );
};

export default ProductPage;
