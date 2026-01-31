import { createBrowserRouter, Navigate } from 'react-router';
import { MainLayout } from '@/app/components/main-layout';
import { HomePage } from '@/app/pages/home-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/en" replace />,
  },
  {
    path: '/:lang',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/en" replace />,
  },
]);
