import React, { useState, useEffect } from 'react';
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
  Spacer,
} from './Styled';

import TopDrawer from './TopDrawer/TopDrawer';
import DrawerButton from './DrawerButton';

/**
 * Sidebar component. Supports mobile and desktop view.
 * @namespace Navbar
 */
const Navbar = () => {
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
          <UserLink>Anonymous</UserLink>
        </UserWrapper>
        <NavList>
          <ListItem>
            <NavLink>Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Create Event</NavLink>
          </ListItem>
        </NavList>
      </Nav>
    </SideBar>
  );
};

export default Navbar;
