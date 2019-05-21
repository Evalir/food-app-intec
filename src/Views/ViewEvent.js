import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar/Navbar';

const CenteringWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding-top: 1em;
`;

const ViewEvent = props => {
  const { eventName, eventDescription } = props;
  return (
    <>
      <Navbar />
      <CenteringWrapper>
        <h1>{eventName}</h1>
        <p>{eventDescription}</p>
      </CenteringWrapper>
    </>
  );
};

export default ViewEvent;
