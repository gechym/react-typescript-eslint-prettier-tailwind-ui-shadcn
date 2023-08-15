import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// redux
import store from 'stores/stores';
// component
import DefaultLayout from 'layouts/defaultLayout';
import Post from 'pages/Post';
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
