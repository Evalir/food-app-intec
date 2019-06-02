import React from 'react';

import PageWrapper from '../Components/PageWrapper';
import Navbar from '../Components/Navbar/Navbar';

const ViewEvent = props => {
  const { eventName, eventDescription } = props;
  return (
    <PageWrapper>
      <Navbar />
      <h1>{eventName}</h1>
      <p>{eventDescription}</p>
    </PageWrapper>
  );
};

export default ViewEvent;
