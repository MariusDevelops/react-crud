import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchProducts = async () => {
  const { data } = await api.get<ProductModel[]>('/products');

  return data;
};

const ApiService = {
  fetchProducts,
};

export default ApiService;
