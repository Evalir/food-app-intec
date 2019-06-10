import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  background: ${props => props.theme.red_p};
  height: 2px;
  width: ${props => props.width || '20px'};
  border-radius: 1px;
  margin-bottom: 4px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const DrawerButton = ({ setOpen, open }) => {
  return (
    <Button onClick={() => setOpen(!open)}>
      <Bar />
      <Bar width={'24px'} />
      <Bar />
    </Button>
  );
};

export default DrawerButton;
