import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Spacer = styled.div`
  flex: 1;
`;

export const NavBar = styled.header`
  position: relative;
  grid-area: sidebar;
  z-index: 200;
  background-color: ${props => props.theme.darkpurple};
  height: 100vh;
`;

export const Nav = styled.nav`
  height: 100%;
  display: grid;
  grid-template-rows: [user] 10% [nav_content] 1fr [sign] 10%;
  justify-items: center;
  padding: 0 1em;
`;

export const UserWrapper = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
`;

export const UserPhoto = styled.div`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin: 1em 1em 0;
  background-color: ${props => props.theme.yellow};
`;

export const UserLink = styled(Link)`
  grid-area: user;
  display: inline-block;

  text-decoration: none;
  font-family: 'Rubik', Helvetica;
  font-size: 0.8em;
  font-weight: bold;
  color: white;
  align-self: center;
`;

export const NavList = styled.ul`
  list-style: none;
  outline: none;
  width: 100%;
`;

export const ListItem = styled.li`
  margin-bottom: 1em;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  color: ${props => props.theme.lightpurple};
  &:hover {
    color: white;
  }
`;
