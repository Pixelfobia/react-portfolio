import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
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
        to="/react-portfolio/gallery"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
      }
      >
      Gallery
      </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
        to="/react-portfolio/contact"
        end
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
      }
      >
      Contact
      </NavLink>
      </li>
      </ul>
  );
}

export default Header;
