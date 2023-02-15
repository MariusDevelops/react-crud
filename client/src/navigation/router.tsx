import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from 'pages/home-page/home-page';
import ProductPage from 'pages/product-page';
import ProductFormPage from '../pages/product-form-page/index';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.ProductPage.routePath,
        element: <ProductPage />,
      },
      {
        path: routes.ProductCreatePage,
        element: <ProductFormPage mode="create" />,
      },
    ],
  },
]);

export default router;
