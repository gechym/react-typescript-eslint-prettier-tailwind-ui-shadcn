import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';

type DefaultLayoutProps = {
  childrent: React.ReactNode;
};

function DefaultLayout({ childrent }: DefaultLayoutProps) {
  return (
    <div>
      <Header />
      <Content>{childrent}</Content>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
