import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Store/Store';
import Navbar from '../Components/Navbar/Navbar';
const Header = styled.h3`
  font-family: 'Helvetica';
`;

export default function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const { actions } = useContext(Context);

  function SubmitForm(e) {
    e.preventDefault();
    actions.CreateEvent({ name: eventName });
    setEventName('');
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Header>Create Event</Header>
        <form onSubmit={SubmitForm}>
          <div className="event-form">
            <label>Event name</label>
            <input
              type="text"
              value={eventName}
              onChange={e => setEventName(e.target.value)}
            />
          </div>
          <button className="btn-large waves-effect waves-light " type="button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
