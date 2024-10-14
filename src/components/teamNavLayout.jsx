import React, { Component } from 'react';
import Navbar from './navbar';
import { Outlet } from 'react-router-dom';
import NavbarTeam from './navbarTeam';

export class TeamNavLayout extends Component {
  render() {
    return (
      <>
        <NavbarTeam />
        <Outlet context={'Data that is common among the children of team'} />
      </>
    );
  }
}

export default TeamNavLayout;
