import styled from 'styled-components';

export const StyledDrawer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

export const Bar = styled.div`
  background: white;
  width: 24px;
  height: 2px;
`;
