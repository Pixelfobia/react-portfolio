import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="container mb-5">
      <a className="logotop" href="index.html">
        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 450 200">
          <path className="cls-3"
            d="M137.71,277.35a15.22,15.22,0,0,1-15.21-15.21,3,3,0,0,1,5.94,0,9.27,9.27,0,0,0,18.53,0V25.62a3,3,0,0,1,5.95,0V262.14A15.23,15.23,0,0,1,137.71,277.35Z" />
          <path className="cls-3"
            d="M284.69,132.54c-8.08-7.75-20.6-12.73-34.66-12.73-13.32,0-25.26,4.47-33.35,11.54-8.08-7.07-20-11.54-33.34-11.54s-25.26,4.47-33.34,11.54c-8.08-7.07-20-11.54-33.34-11.54s-25.26,4.47-33.34,11.54c-8.08-7.07-20-11.54-33.34-11.54-14.07,0-26.59,5-34.67,12.73C26.07,78.52,78.37,37,142.38,33.89c2.53-.12,5.06-.18,7.62-.18s5.09.06,7.62.18C221.63,37,273.93,78.52,284.69,132.54Z" />
        </svg>
      </a>
      <nav>
        <ul className="d-flex justify-content-start">
          <li className="nav-li">
            <NavLink
              to="/react-portfolio/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-li active' : 'nav-li'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/react-portfolio/projects"
              end
              className={({ isActive }) =>
                isActive ? 'nav-li active' : 'nav-li'
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              to="/react-portfolio/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-li active' : 'nav-li'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
