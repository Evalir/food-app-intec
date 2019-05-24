import React, { useState, useEffect } from 'react';
import {
  NavBar,
  Nav,
  UserLink,
  UserPhoto,
  NavList,
  ListItem,
  NavLink,
  Spacer,
} from './Styled';

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

  return (
    <NavBar>
      <Nav>
        <div>
          <UserPhoto />
          <UserLink>Anonymous</UserLink>
        </div>
        <NavList>
          <ListItem>
            <NavLink>Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Create Event</NavLink>
          </ListItem>
        </NavList>
      </Nav>
    </NavBar>
  );
};

export default Navbar;
