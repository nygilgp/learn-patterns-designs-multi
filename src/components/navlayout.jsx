import React, { Component } from 'react';
import Navbar from './navbar';
import { Outlet, useNavigation } from 'react-router-dom';

function NavLayout() {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      {state === 'loading' ? <div>Loading...</div> : <Outlet />}
    </>
  );
}

export default NavLayout;
