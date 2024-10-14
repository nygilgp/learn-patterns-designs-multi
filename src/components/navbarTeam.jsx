import React from 'react';
import { NavLink } from 'react-router-dom';
import teamMembers from '../data/teamMembers.json';

function NavbarTeam() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="joe">Joe</NavLink>
        </li>
        <li>
          <NavLink to="ny">Ny</NavLink>
        </li>
        {teamMembers.map(({ id, name }) => (
          <li key={id}>
            <NavLink to={id}>
              {id} - {name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="..">.. Route</NavLink>
        </li>
        <li>
          <NavLink to=".." relative="path">
            .. Path
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarTeam;
