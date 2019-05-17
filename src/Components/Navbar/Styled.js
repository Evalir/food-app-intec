import styled from 'styled-components';

export const Spacer = styled.div`
  flex: 1;
`;
export const StyledNavbar = styled.header`
  position: relative;
  z-index: 200;
  width: 100%;
  background-color: ${props => props.theme.black};
  height: 42px;
`;

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;

  ul {
    color: ${props => props.theme.grey};
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

export const StyledLogoLink = styled.a`
  font-family: 'Pacifico', 'Questrial', Helvetica;
  font-size: 1.4em;
  color: white;
  align-self: center;
`;
