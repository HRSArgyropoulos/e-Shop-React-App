import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { paths, className: navClass } = props;
  return (
    <div className={navClass}>
      <nav>
        <ul>
          <li key="homepage">
            <NavLink
              exact
              to="/"
              activeClassName="activeMenu">
              Home
            </NavLink>
          </li>
          {paths.map((path) => {
            // convert path for navlink '/path'
            const pathLink =
              '/' +
              path
                .trim()
                .replace(' ', '-')
                .toLowerCase();
            return (
              <li key={pathLink}>
                <NavLink
                  to={pathLink}
                  activeClassName="activeMenu">
                  {path}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
