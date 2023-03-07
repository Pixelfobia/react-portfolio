import React from "react";
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
        to="/react-portfolio/"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
      }
      >
      Home
      </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
        to="/react-portfolio/about"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
      }
      >
      About
      </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
        to="/react-portfolio/discover"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
      }
      >
      Discover
      </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
        to="/react-portfolio/search"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
      }
      >
      search
      </NavLink>
      </li>
      </ul>
  );
}

export default NavTabs;
