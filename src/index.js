import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Login';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        Hello world! <hr />
        <button onClick={() => (window.location.href = '/login')}>
          Go to Login
        </button>
      </div>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
