import React from 'react';
import {
  Card,
  ImageContainer,
  FoodImage,
  InfoWrapper,
  FoodTitle,
  FoodLink,
} from './Styled';

const FoodCard = ({ key, name, description, imgUrl }) => {
  const newName = name.length > 25 ? name.substring(0, 20) + '...' : name;
  const newDescription =
    description.length > 50
      ? description.substring(0, 47) + '...'
      : description;

  return (
    <Card key={key}>
      <ImageContainer>
        <FoodImage src="https://source.unsplash.com/random/250x200?food" />
      </ImageContainer>
      <InfoWrapper>
        <FoodTitle>{newName}</FoodTitle>
        <p>{newDescription}</p>
        <FoodLink to="/">View</FoodLink>
      </InfoWrapper>
    </Card>
  );
};

FoodCard.defaultProps = {
  name: 'No name provided',
  description: 'No description provided.',
};

export default FoodCard;
