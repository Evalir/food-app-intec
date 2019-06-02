import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import FoodCard from '../Components/FoodCard/FoodCard';
import Navbar from '../Components/Navbar/Navbar';

const Grid = styled.div`
  grid-area: content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.5em;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 64px;
  }
`;

const ViewEvents = () => {
  const { state, actions } = useContext(Context);
  useEffect(() => {
    actions.FetchEvents();
  }, []);

  return (
    <PageWrapper>
      <Navbar />
      <Grid>
        {state.events.map(event => (
          <FoodCard
            key={event.url}
            name={event.title}
            description={event.description}
            linkTo={`/${event.url.substr(event.url.length - 3)}`}
          />
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default ViewEvents;
