const ProductPagePath = '/product-page/' as const;

const routes = {
  HomePage: '/',
  ProductPage: {
    routePath: `${ProductPagePath}:id`,
    createLink: (id: string | number) => `${ProductPagePath}${id}`,
  },
  ProductCreatePage: '/house-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
