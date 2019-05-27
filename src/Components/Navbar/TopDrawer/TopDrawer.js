import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Drawer = styled.header`
  background: ${props => props.theme.darkpurple};
  width: 100%;
  height: 100px;
  position: relative;
  z-index: 100;
  margin: 0;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(-200%)')};
`;

const DrawerNav = styled.nav`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.lightpurple};
  ul {
    margin: 0 1em;
    list-style: none;
    li {
      padding: 0.5em 0 0.5em;
      border-bottom: 1px solid ${props => props.theme.lightpurple};
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const TopDrawer = ({ show }) => {
  return (
    <Drawer show={show}>
      <DrawerNav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create Event</NavLink>
          </li>
        </ul>
      </DrawerNav>
    </Drawer>
  );
};

export default TopDrawer;
