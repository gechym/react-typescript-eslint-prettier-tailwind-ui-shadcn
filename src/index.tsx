import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
// redux
import store from 'stores/stores';
// component
import DefaultLayout from 'layouts/defaultLayout';
import Post from 'pages/Post';
import App from './App';
// style
import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: '/post',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: '',
        element: <Post />,
      },
      {
        path: ':postId',
        element: (<div><Link to="/">Your Name</Link></div>),
      },
    ],
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
