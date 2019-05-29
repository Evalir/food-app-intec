import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  display: block;
  grid-area: content;
  position: relative;
  z-index: 200;
  background-color: ${props => props.theme.darkpurple};
  width: 100%;
  height: 64px;
`;

export const MobileNav = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SideBar = styled.header`
  position: relative;
  grid-area: sidebar;
  z-index: 200;
  background-color: ${props => props.theme.darkpurple};
  height: 100%;
`;

export const Nav = styled.nav`
  height: 100%;
  display: grid;
  grid-template-rows: [user] 100px [nav_content] 1fr [sign] 100px;
  /* justify-items: center; */
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
  transition: all 0.1s;
  color: ${props => props.theme.lightpurple};
  &:hover {
    color: white;
  }
`;
