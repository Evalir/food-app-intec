import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Auth from '../Utils/Auth';
import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import FoodCard from '../Components/FoodCard/FoodCard';
import Navbar from '../Components/Navbar/Navbar';

const Grid = styled.div`
  /* display: relative;
  z-index: 100; */
  grid-area: content;
  width: 100%;
  height: calc(100vh - 64px);
  margin: 64px 0 0 16px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ViewEvents = () => {
  const { state, actions } = useContext(Context);
  const [activeURL, setActiveURL] = useState('');
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
          <h1>LATEST EVENTS</h1>
          {state.events.map(event => {
            return (
              <div
                key={event.url}
                onClick={() =>
                  event.url === activeURL
                    ? setActiveURL('')
                    : setActiveURL(event.url)
                }
              >
                <FoodCard
                  name={event.title}
                  description={event.description}
                  linkTo={`/${event.url.substr(event.url.length - 2)}`}
                  isOpen={event.url === activeURL}
                />
              </div>
            );
          })}
        </Grid>
      </PageWrapper>
    </>
  );
};

export default ViewEvents;
