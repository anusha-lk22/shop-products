import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes';
import Spinner from './components/Spinner';

function App() {
  return (
    <React.Suspense fallback={<Spinner />}>
      <RouterProvider router={AppRoutes} />
    </React.Suspense>
  );
}

export default App;
