import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from 'layouts/defaultLayout';
import { ThemeProvider } from 'stores/themeStores/ThemeContext';
import Post from 'pages/Post';
import PostProvider from 'stores/postStore/PostProvider';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout childrent={<App />} />,
  },
  {
    path: '/post',
    element: <DefaultLayout childrent={<Post />} />,
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
]);

root.render(
  <ThemeProvider>
    <PostProvider>
      <RouterProvider router={router} />
    </PostProvider>
  </ThemeProvider>,
);
