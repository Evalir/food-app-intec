import styled from 'styled-components';

// Desktop
export const SideBar = styled.header`
  grid-area: sidebar;
  background-color: ${props => props.theme.gray_sp};
  height: 100vh;
`;
export const Nav = styled.nav`
  height: 100%;
  display: grid;
  grid-template-rows: [user] 250px [nav_content] 1fr [sign] 100px;
  grid-template-columns: 1fr;
  box-shadow: 10px 4px 20px 0px rgba(236, 239, 243, 0.5);
  padding: 0 1em;
`;

export const UserWrapper = styled.div`
  grid-area: user;
  grid-column: span 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .user-content {
    position: relative;
    z-index: 200;
    .user-inner {
    }
    a {
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 300;
      font-size: 33px;
      transition: all 0.1s;
      color: ${props => props.theme.background};
      &:hover {
        color: white;
      }
    }
  }
`;

export const NavList = styled.ul`
  grid-area: nav_content;
  grid-column: span 1;
  list-style: none;
  outline: none;
  width: 100%;
  position: relative;
  z-index: 200;
  align-self: center;
  li {
    margin-bottom: 1em;
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
`;

// Mobile
export const MobileNav = styled.div`
  height: 100%;
  display: flex;
  padding: 0 0 0 1em;
  background: ${props => props.theme.background};
  border-bottom: 2px solid rgba(236, 65, 96, 0.4000000059604645);
`;

export const NavBar = styled.div`
  display: block;
  grid-area: content;
  position: relative;
  z-index: 200;
  width: 100%;
  height: 64px;
`;
