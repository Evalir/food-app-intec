import React, { useContext } from 'react';
import { Context } from '../Store/StateProvider';
import styled from '@emotion/styled';

const Header = styled.h3`
  font-family: 'Helvetica';
`;

export default function ViewEvents() {
  const { state } = useContext(Context);

  return (
    <div className="container">
      <Header>Events</Header>
      {state.events.map(event => (
        <div className="" key={event.name}>
          {event.name}
        </div>
      ))}
    </div>
  );
}
