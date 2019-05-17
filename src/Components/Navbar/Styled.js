import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Spacer = styled.div`
  flex: 1;
`;
export const StyledNavbar = styled.header`
  position: relative;
  z-index: 200;
  width: 100%;
  background-color: ${props => props.theme.orange};
  height: 42px;
`;

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;

  ul {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      padding: 0 0.8em;
      font-size: 0.8em;
      align-self: center;
    }
  }
`;

export const StyledLogoLink = styled(Link)`
  text-decoration: none;
  font-family: 'Pacifico', 'Questrial', Helvetica;
  font-size: 1.4em;
  color: white;
  align-self: center;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.white};
`;
