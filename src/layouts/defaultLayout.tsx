import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';

function DefaultLayout() {
  return (
    <div>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
