import React, { useState, useContext, useReducer } from 'react';
import styled from '@emotion/styled';

import { Context } from '../Store/StateProvider';

const Header = styled.h3`
  font-family: 'Helvetica';
`;

export default function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const { state, dispatch, actions } = useContext(Context);
  function SubmitForm(e) {
    e.preventDefault();
    actions.CreateEvent({ name: eventName });
  }

  return (
    <div className="container">
      <Header>Create Event</Header>
      <form onSubmit={SubmitForm}>
        <div className="">
          <label>Event name</label>
          <input
            type="text"
            value={eventName}
            onChange={e => setEventName(e.target.value)}
          />
        </div>
        <button className="btn" type="button">
          Submit
        </button>
      </form>
    </div>
  );
}
