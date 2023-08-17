import React, { useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { getTheme } from 'stores/action/theme.action';
// ui
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';

type DefaultLayoutProps = {
  childrent: React.ReactNode;
};

function DefaultLayout({ childrent }: DefaultLayoutProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Content>{childrent}</Content>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
