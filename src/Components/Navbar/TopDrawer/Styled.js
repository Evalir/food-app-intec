import styled from 'styled-components';

export const StyledDrawer = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: flex-start;
  /* padding: 0 1em; */
  background: ${props => props.theme.black};
  transform: ${props => (props.show ? 'translateY(0%)' : 'translateY(-200%)')};
  /* transition: transform 0.3s ease-out; */

  ul {
    color: ${props => props.theme.grey};
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    li {
      padding: 0.8em;
      font-size: 0.7em;
      width: 100%;
      border-top: 1px solid ${props => props.theme.greydivider};
    }
  }
`;
