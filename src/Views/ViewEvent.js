import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';

import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import ContentWrapper from '../Components/ContentWrapper';
import Navbar from '../Components/Navbar/Navbar';
import EventCard from '../Components/EventCard';

const ViewEvent = ({ match }) => {
  const { state, actions } = useContext(Context);
  useEffect(() => {
    actions.FetchSingleEvent(match.params.id);
  }, []);
  const title =
    state.currentEvent.title === ''
      ? 'Current Event'
      : state.currentEvent.title;

  return (
    <>
      <Helmet title={title} />
      <PageWrapper>
        <Navbar />
        <ContentWrapper>
          <EventCard>
            <h1>{state.currentEvent.title}</h1>
            <p>{`${moment(state.currentEvent.start).format(
              'hh:mm',
            )} -> ${moment(state.currentEvent.end).format('hh:mm')}`}</p>
            <p>{state.currentEvent.description}</p>
          </EventCard>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default ViewEvent;
