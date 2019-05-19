import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Store/Store';
import Navbar from '../Components/Navbar/Navbar';

const Header = styled.h3`
  font-family: 'Helvetica';
  line-height: 2em;
`;

const CenteringWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding-top: 1em;
`;
// TODO: Add Formik for form validation
export default function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const buildings = ['AH', 'FD', 'AJ', 'DP'];
  const [building, setBuilding] = useState(buildings[0]);
  const { actions } = useContext(Context);

  function SubmitForm(e) {
    e.preventDefault();
    //actions.CreateEvent({ name: eventName });
    //setEventName('');
    console.log(eventName, eventDescription, building);
  }

  return (
    <>
      <Navbar />
      <CenteringWrapper>
        <Header>Create Event</Header>
        <form onSubmit={SubmitForm}>
          <div>
            <label>Event Title: </label>
            <input
              type="text"
              value={eventName}
              onChange={e => setEventName(e.target.value)}
            />
          </div>
          <div>
            <label>Event Description: </label>
            <textarea
              value={eventDescription}
              onChange={e => setEventDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Building</label>
            <select
              name="buildings"
              value={building}
              onChange={e => setBuilding(e.target.value)}
            >
              {buildings.map(building => (
                <option value={building}>{building}</option>
              ))}
            </select>
          </div>
          <button type="button">Submit</button>
        </form>
      </CenteringWrapper>
    </>
  );
}
