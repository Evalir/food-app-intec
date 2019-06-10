import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Drawer = styled.header`
  background: ${props => props.theme.gray_sp};
  width: 70%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 100;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(-200%)')};
  transition: all 0.5s ease;
`;

const DrawerNav = styled.nav`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.gray_d};
  font-family: 'Poppins', Helvetica;
  text-transform: uppercase;
  display: grid;
  grid-template-rows: [user] 100px [nav_content] 1fr [sign] 100px;
  .user-content {
    grid-area: user;
    grid-column: 1 / -1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 18px;
      transition: all 0.1s;
      color: ${props => props.theme.gray_d};
      &:hover {
        color: white;
      }
    }
  }
  ul {
    grid-area: nav_content;
    grid-column: span 1;
    grid-row: span 1;
    list-style: none;

    li {
      padding: 0 0 0.5em;
    }
  }
`;

const CloseButton = styled.button`
  grid-area: sign;
  grid-column: span 1;
  grid-row: span 1;
  font-size: 48px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SideDrawer = ({ show, setShow }) => {
  return (
    <Drawer show={show}>
      <DrawerNav>
        <div className="user-content">
          <div className="user-inner">
            <FontAwesomeIcon icon={faUser} color="black" />
          </div>
          <Link to="/">Anonymous</Link>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create Event</NavLink>
          </li>
          <li>
            <CloseButton onClick={() => setShow(!show)}>&times;</CloseButton>
          </li>
        </ul>
      </DrawerNav>
    </Drawer>
  );
};

export default SideDrawer;
