import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Store/Store';

import FoodCard from '../Components/FoodCard/FoodCard';
import Navbar from '../Components/Navbar/Navbar';

const Header = styled.h3`
  font-family: 'Questrial', Helvetica;
  margin: 0 0 1em 0;
`;

const CenteringWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding-top: 1em;
`;

const Grid = styled.div`
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export default function ViewEvents() {
  const { state, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      <CenteringWrapper>
        <Header>Events</Header>
        <Grid>
          {state.events.map(event => (
            <FoodCard key={event.name} name={event.name} />
          ))}
        </Grid>
      </CenteringWrapper>
    </>
  );
}
