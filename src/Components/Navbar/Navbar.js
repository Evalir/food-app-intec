import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Store/Store';
import History from '../../Utils/History';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
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
import NavButton from '../NavButton';

/**
 * Sidebar component. Supports mobile and desktop view.
 * @namespace Navbar
 */
const Navbar = () => {
  const { state, actions } = useContext(Context);
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
          <UserPhoto>
            <FontAwesomeIcon icon={faUser} color="white" />
          </UserPhoto>
          <UserLink to="/">
            {state.username === ''
              ? 'Anonymous'
              : state.username.charAt(0).toUpperCase() +
                state.username.substr(1)}
          </UserLink>
        </UserWrapper>
        <NavList>
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/create">Create Event</NavLink>
          </ListItem>
        </NavList>
        <NavButton
          onClick={() =>
            state.isLoggedIn ? actions.LogOut() : History.push('/login')
          }
        >
          {state.isLoggedIn ? `Sign Out` : `Sign In `}
        </NavButton>
      </Nav>
    </SideBar>
  );
};

export default Navbar;
