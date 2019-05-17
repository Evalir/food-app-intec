import React from 'react';
import { StyledDrawer } from './Styled';
import { StyledNavLink } from '../Styled';
/**
 * Top drawer for mobile view. Contains designers, shots, and search bar.
 * @param {bool} show
 * tells the drawer if it should transform and show itself or translate out.
 */
const TopDrawer = ({ show }) => {
  const isShown = show ? true : false;
  return (
    <StyledDrawer show={isShown}>
      <ul>
        <li>Home</li>
        <li>
          <StyledNavLink to="/create">Create Event</StyledNavLink>
        </li>
      </ul>
    </StyledDrawer>
  );
};

export default TopDrawer;
