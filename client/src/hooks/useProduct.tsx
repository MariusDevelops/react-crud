import React from 'react';
import ApiService from 'services/api-service';

const useProduct = (id: string | undefined) => {
  const [house, setHouse] = React.useState<ProductModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedHouse = await ApiService.fetchProduct(id);

        setHouse(fetchedHouse);
      })();
    }
  }, [id]);

  return house;
};

export default useProduct;
