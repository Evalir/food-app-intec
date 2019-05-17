import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Store/Store';

import FoodCard from '../Components/FoodCard/FoodCard';

const Header = styled.h3`
  font-family: 'Questrial', Helvetica;
  margin: 0 0 1em 0;
`;

export const CenteringWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding-top: 1em;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 20px;
`;

export default function ViewEvents() {
  const { state, actions } = useContext(Context);

  return (
    <CenteringWrapper>
      <Header>Events</Header>
      <Grid>
        {state.events.map(event => (
          <FoodCard key={event.name} name={event.name} />
        ))}
      </Grid>
    </CenteringWrapper>
  );
}
