import React, { useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { getTheme } from 'stores/action/theme.action';
// ui
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';

// type DefaultLayoutProps = {
//   childrent: React.ReactNode;
// };

function DefaultLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);

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
