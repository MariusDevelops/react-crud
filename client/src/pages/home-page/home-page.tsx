import React from 'react';
import ApiService from 'services/api-service';
import ProductCard from './product-card';
import * as Styled from './styled';

const HomePage = () => {
  const [products, setProducts] = React.useState<ProductModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedProducts = await ApiService.fetchProducts();
      setProducts(fetchedProducts);
    })();
  }, []);

  return (
    <Styled.ProductCardGrid>
      {products.map((product) => <ProductCard key={product.id} {...product} />)}
    </Styled.ProductCardGrid>
  );
};

export default HomePage;
