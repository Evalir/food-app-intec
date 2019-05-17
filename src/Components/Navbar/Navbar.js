import React, { useState, useEffect } from 'react';

import { StyledNavbar, StyledNav, StyledLogoLink, Spacer } from './Styled';
import TopDrawer from './TopDrawer/TopDrawer';

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
            <ul>
              <li>
                <StyledLogoLink>Food App</StyledLogoLink>
              </li>
            </ul>
          </div>
          <Spacer />
          <div>
            <ul>
              <li>Sign in</li>
              <li>
                <button onClick={() => setShow(!show)}>Click</button>
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
            <li>Home</li>
            <li>Create Event</li>
            <li>About</li>
          </ul>
        </div>
        <Spacer />
        <div>
          <ul>
            <li>Sign in</li>
            <li>Sign up</li>
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
