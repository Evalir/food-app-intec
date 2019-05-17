import React from 'react';
import { StyledDrawer, Bar } from './Styled';

const DrawerButton = ({ setShow, show }) => {
  return (
    <StyledDrawer onClick={() => setShow(!show)}>
      <Bar />
      <Bar />
      <Bar />
    </StyledDrawer>
  );
};

export default DrawerButton;
