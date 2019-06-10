import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Auth from '../Utils/Auth';
import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import FoodCard from '../Components/FoodCard/FoodCard';
import Navbar from '../Components/Navbar/Navbar';

const Grid = styled.div`
  grid-area: content;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 64px;
  }
`;

const ViewEvents = () => {
  const { state, actions } = useContext(Context);

  useEffect(() => {
    actions.FetchEvents();
    if (!Auth.isLoggedIn()) {
      actions.SetLoggedOut();
      console.log('logged out');
    } else {
      actions.SetLoggedIn();
      console.log('logged in :)');
    }
  }, []);

  return (
    <>
      <Helmet title="Home" />
      <PageWrapper>
        <Navbar />
        <Grid>
          {state.events.map(event => {
            return (
              <FoodCard
                key={event.url}
                name={event.title}
                description={event.description}
                linkTo={`/${event.url.substr(event.url.length - 2)}`}
              />
            );
          })}
        </Grid>
      </PageWrapper>
    </>
  );
};

export default ViewEvents;
