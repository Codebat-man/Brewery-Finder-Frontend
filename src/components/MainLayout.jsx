import React from 'react';
import Nav from '../shared/Nav';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';
import AuthCheck from '../utils/AuthCheck';


const MainLayout = () => {
  return (
    <>
      <Nav/>
      <AuthCheck/>
      <Outlet/>
      <Footer />
    </>
  );
};

export default MainLayout;
