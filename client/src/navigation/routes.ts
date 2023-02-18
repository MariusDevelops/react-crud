const ProductPagePath = '/product-page/' as const;
const ProductUpdatePagePath = '/product-update-page/' as const;

const routes = {
  HomePage: '/',
  ProductPage: {
    routePath: `${ProductPagePath}:id`,
    createLink: (id: string | number) => `${ProductPagePath}${id}`,
  },
  ProductUpdatePage: {
    routePath: `${ProductUpdatePagePath}:id`,
    createLink: (id: string | number) => `${ProductUpdatePagePath}${id}`,
  },
  ProductCreatePage: '/house-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
