import React from 'react';
import {
  Card,
  ImageContainer,
  InfoWrapper,
  FoodTitle,
  FoodLink,
} from './Styled';

const FoodCard = ({ key, name, description }) => {
  return (
    <Card key={key}>
      <ImageContainer />
      <InfoWrapper>
        <FoodTitle>{name}</FoodTitle>
        <p>{description}</p>

        <FoodLink>View</FoodLink>
      </InfoWrapper>
    </Card>
  );
};

FoodCard.defaultProps = {
  name: 'name',
  description: 'No description provided.',
};

export default FoodCard;
