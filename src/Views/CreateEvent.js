import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Store/Store';
import Navbar from '../Components/Navbar/Navbar';

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr 1fr 1fr;
  grid-template-areas: 'sidebar content content content';
  grid-gap: 20px;
  @media only screen and (max-width: 990px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'sidebar content content';
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'content';
  }
`;

const CenteringWrapper = styled.div`
  grid-area: content;
  justify-self: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding-top: 1em;
`;

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const buildings = ['AH', 'FD', 'AJ', 'DP'];
  const [building, setBuilding] = useState(buildings[0]);
  const { actions } = useContext(Context);

  function SubmitForm(e) {
    e.preventDefault();
    actions.CreateEvent({ name: eventName });
    setEventName('');
    console.log(eventName, eventDescription, building);
  }

  return (
    <>
      <PageWrapper>
        <Navbar />
        <CenteringWrapper>Klk wawawa</CenteringWrapper>
      </PageWrapper>
    </>
  );
};

export default CreateEvent;
