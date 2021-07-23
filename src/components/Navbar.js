import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  background-color: rgb(248, 230, 192);
  color: black;
  padding: 1rem 2rem;
  width: 300px;
  height: 100%;
  border-radius: var(--dashboardRadius) 0 0
    var(--dashboardRadius);
  position: relative;
`;

const Navbar = (props) => {
  const { paths, className: navClass } = props;
  return (
    <NavbarWrapper className={navClass}>
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
    </NavbarWrapper>
  );
};

export default Navbar;
