import React, { useState, useEffect } from 'react';
import {
  StyledNavbar,
  StyledNav,
  StyledLogoLink,
  StyledNavLink,
  Spacer,
} from './Styled';
import TopDrawer from './TopDrawer/TopDrawer';
import DrawerButton from './TopDrawer/DrawerButton/DrawerButton';

/**
 * Navbar component. Supports mobile and desktop view.
 * @namespace Navbar
 */
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);
  /**
   * Renders mobile view for the navbar.
   */
  function renderMobile() {
    return (
      <>
        <StyledNav>
          <div>
            <DrawerButton show={show} setShow={setShow} />
          </div>
          <div>
            <ul>
              <li>
                <StyledLogoLink>Food App</StyledLogoLink>
              </li>
            </ul>
          </div>
          <Spacer />
          <div>
            <ul>
              <li>
                <StyledNavLink to="/">Sign in</StyledNavLink>
              </li>
            </ul>
          </div>
        </StyledNav>
        <TopDrawer show={show} />
      </>
    );
  }
  /**
   * Render desktop view for the navbar.
   */
  function renderDesktop() {
    return (
      <StyledNav>
        <div>
          <ul>
            <li>
              <StyledLogoLink>Food App</StyledLogoLink>
            </li>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/">Create Event</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/">About</StyledNavLink>
            </li>
          </ul>
        </div>
        <Spacer />
        <div>
          <ul>
            <li>
              <StyledNavLink to="/">Sign in</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/">Sign up</StyledNavLink>
            </li>
          </ul>
        </div>
      </StyledNav>
    );
  }
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
    <StyledNavbar>{isMobile ? renderMobile() : renderDesktop()}</StyledNavbar>
  );
};

export default Navbar;
