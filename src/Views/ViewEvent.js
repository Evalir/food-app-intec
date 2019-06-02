import React, { useContext, useEffect } from 'react';
import moment from 'moment';
import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import ContentWrapper from '../Components/ContentWrapper';
import Navbar from '../Components/Navbar/Navbar';
import EventCard from '../Components/EventCard';

const ViewEvent = props => {
  const { state, actions } = useContext(Context);
  useEffect(() => {
    actions.FetchSingleEvent(props.match.params.id);
  }, []);

  return (
    <PageWrapper>
      <Navbar />
      <ContentWrapper>
        <EventCard>
          {<h1>{state.currentEvent.title}</h1>}
          {
            <p>{`${moment(state.currentEvent.start).format(
              'hh:mm',
            )} -> ${moment(state.currentEvent.end).format('hh:mm')}`}</p>
          }
          {<p>{state.currentEvent.description}</p>}
        </EventCard>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ViewEvent;
