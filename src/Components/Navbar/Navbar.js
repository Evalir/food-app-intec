import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Context } from '../../Store/Store';

import {
  SideBar,
  Nav,
  UserWrapper,
  NavList,
  NavBar,
  MobileNav,
} from './Styled';
import SideDrawer from './SideDrawer/SideDrawer';
import DrawerButton from './DrawerButton';
import { Button } from '../Button';
import userSVG from '../../static/UserSVG.svg';
import History from '../../Utils/History';
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

  function handleLogClick() {
    if (state.isLoggedIn) {
      actions.LogOut();
    } else {
      History.push('/login');
    }
  }

  if (isMobile) {
    return (
      <NavBar>
        <MobileNav>
          <DrawerButton setOpen={setShow} open={show} />
        </MobileNav>
        <SideDrawer show={show} setShow={setShow} />
      </NavBar>
    );
  }

  return (
    <SideBar>
      <Nav>
        <UserWrapper>
          <div style={{ position: 'absolute' }}>
            <img src={userSVG} alt="red background" />
          </div>
          <div className="user-content">
            <div className="user-inner">
              <FontAwesomeIcon icon={faUser} color="white" />
            </div>
            <Link to="/">
              {state.username === ''
                ? 'Anonymous'
                : state.username.charAt(0).toUpperCase() +
                  state.username.substr(1)}
            </Link>
          </div>
        </UserWrapper>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Event</Link>
          </li>
        </NavList>
        <div className="sign_button">
          {!state.isLoggedIn && (
            <Button onClick={() => History.push('/login')}>Log In</Button>
          )}
          {state.isLoggedIn && (
            <Button onClick={() => actions.LogOut()}>Log Out</Button>
          )}
        </div>
      </Nav>
    </SideBar>
  );
};

export default Navbar;
