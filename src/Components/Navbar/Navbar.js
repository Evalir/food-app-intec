import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Store/Store';
import {
  SideBar,
  Nav,
  UserWrapper,
  UserLink,
  UserPhoto,
  NavList,
  ListItem,
  NavLink,
  NavBar,
  MobileNav,
} from './Styled';

import TopDrawer from './TopDrawer/TopDrawer';
import DrawerButton from './DrawerButton';

/**
 * Sidebar component. Supports mobile and desktop view.
 * @namespace Navbar
 */
const Navbar = ({ username }) => {
  const { state } = useContext(Context);
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);
  // Track window size; at <= 768px render the mobile navbar view.
  useEffect(() => {
    function handleSizeChange() {
      const res =
        window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
      return res;
    }
    window.addEventListener('resize', handleSizeChange);
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
    return () => window.removeEventListener('resize', handleSizeChange);
  }, []);
  if (isMobile) {
    return (
      <NavBar>
        <MobileNav>
          <DrawerButton setOpen={setShow} open={show} />
        </MobileNav>
        <TopDrawer show={show} />
      </NavBar>
    );
  }

  return (
    <SideBar>
      <Nav>
        <UserWrapper>
          <UserPhoto />
          <UserLink to="/">
            {state.username === '' ? 'Anonymous' : state.username}
          </UserLink>
        </UserWrapper>
        <NavList>
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/create">Create Event</NavLink>
          </ListItem>
          {!state.isLoggedIn && (
            <ListItem>
              <NavLink to="/login">Log In</NavLink>
            </ListItem>
          )}
          {state.isLoggedIn && (
            <ListItem>
              <NavLink to="/logout">Log out</NavLink>
            </ListItem>
          )}
        </NavList>
      </Nav>
    </SideBar>
  );
};

export default Navbar;
