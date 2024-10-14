import React, { Component } from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';

export class NavLayout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
}

export default NavLayout;
