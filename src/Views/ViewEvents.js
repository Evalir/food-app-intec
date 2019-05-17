import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Store/Store';

const Header = styled.h3`
  font-family: 'Helvetica';
`;

export const CenteringWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export default function ViewEvents() {
  const { state, actions } = useContext(Context);

  return (
    <CenteringWrapper>
      <Header>Events</Header>
      {state.events.map(event => (
        <div className="row" key={event.name}>
          <div className="col s4">
            <p>{event.name}</p>
          </div>
          <div className="col s6 offset-s2 ">
            <button
              type="button"
              className="btn red"
              onClick={() => actions.DeleteEvent(event)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </CenteringWrapper>
  );
}
