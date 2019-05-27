import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Store/Store';

import FoodCard from '../Components/FoodCard/FoodCard';
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

const Grid = styled.div`
  grid-area: content;
  width: 100%;
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
  const { state } = useContext(Context);

  return (
    <>
      <PageWrapper>
        <Navbar />
        <Grid>
          {state.events.map(event => (
            <FoodCard key={event.name} name={event.name} />
          ))}
        </Grid>
      </PageWrapper>
    </>
  );
};

export default ViewEvents;
