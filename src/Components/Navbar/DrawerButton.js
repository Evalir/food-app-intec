import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  background: ${props => props.theme.lightpurple};
  height: 4px;
  width: 32px;
  border-radius: 1px;
  margin-bottom: 4px;
`;

const Button = styled.button`
  border: none;
  color: ${props => props.theme.lightpurple};
  background: ${props => props.theme.darkpurple};
`;
const DrawerButton = ({ setOpen, open }) => {
  return (
    <Button onClick={() => setOpen(!open)}>
      <Bar />
      <Bar />
      <Bar />
    </Button>
  );
};

export default DrawerButton;
