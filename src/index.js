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
    element: (
      <div style={{ position: 'relative' }}>
        <Login />
        <button
          style={{
            position: 'fixed',
            bottom: '20px', // Adjust this value to control the distance from the bottom
            right: '20px', // Adjust this value to control the distance from the right
            zIndex: '999', // Ensure the button appears above other content
          }}
          onClick={() => (window.location.href = '/')}
        >
          Go to Homepage
        </button>
      </div>
    ),
  }
  
  
]);

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
