import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';

const HomePageLayout = (props) => {
  return (
    <div className="full-height">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomePageLayout;
