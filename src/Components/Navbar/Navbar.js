import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Store/Store';
import History from '../../Utils/History';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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
import NavButton from '../NavButton';
import userSVG from '../../static/UserSVG.svg';

import styled from 'styled-components';
const UserSVG = props => <img src={userSVG} alt="red background" />;
const SVG = styled.div`
  position: absolute;
  /* transform: translateX(-0%); */
`;
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
        <SideDrawer show={show} setShow={setShow} />
      </NavBar>
    );
  }

  return (
    <SideBar>
      <Nav>
        <UserWrapper>
          <SVG>
            <UserSVG />
          </SVG>
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
        {/* <NavButton
          onClick={() =>
            state.isLoggedIn ? actions.LogOut() : History.push('/login')
          }
        >
          {state.isLoggedIn ? `Sign Out` : `Sign In `}
        </NavButton> */}
      </Nav>
    </SideBar>
  );
};

export default Navbar;
