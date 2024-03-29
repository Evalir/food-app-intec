import styled from 'styled-components';

const NavButton = styled.button`
  grid-area: sign;
  display: inline-block;
  grid-column: span 1;
  font-family: Rubik;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  width: 128px;
  height: 32px;
  margin: 0 auto;
  background: linear-gradient(130.77deg, #ffffff -33.61%, #f2e9ff 141.74%);
  box-shadow: 0px 4px 12px rgba(139, 99, 190, 0.3);
  border-radius: 4px;
  transition: all 0.2s;
  :hover {
    transform: translateY(-10%);
  }
`;

export default NavButton;
