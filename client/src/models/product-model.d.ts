type ProductModel = {
  id: string,
  name: string,
  description: string,
  price: number,
  images: string[],
  details: {
    material: string,
    sizes: string[],
    brand: string
  }
};
