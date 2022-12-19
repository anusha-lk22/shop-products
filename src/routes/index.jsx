import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Root from '../components/Root';

const Home = React.lazy(() => import('../components/Home'));

const CartPage = React.lazy(() => import('../components/CartPage'));

export const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'cartpage',
        element: <CartPage />
      },
      
      
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' replace />
  }
]);
