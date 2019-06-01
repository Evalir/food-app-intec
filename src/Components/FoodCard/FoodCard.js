import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  ImageContainer,
  FoodImage,
  InfoWrapper,
  FoodTitle,
  FoodLink,
} from './Styled';

const FoodCard = ({ cardKey, name, description, imgUrl }) => {
  const newName = name.length > 25 ? name.substring(0, 20) + '...' : name;
  const newDescription =
    description.length > 50
      ? description.substring(0, 47) + '...'
      : description;

  return (
    <Card key={cardKey}>
      <ImageContainer>
        <FoodImage src={imgUrl} />
      </ImageContainer>
      <InfoWrapper>
        <FoodTitle>{newName}</FoodTitle>
        <p>{newDescription}</p>
        <FoodLink to="/">View</FoodLink>
      </InfoWrapper>
    </Card>
  );
};

FoodCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
  linkTo: PropTypes.string,
};

FoodCard.defaultProps = {
  name: 'No name provided',
  description: 'No description provided.',
  imgUrl: 'https://source.unsplash.com/random/250x200?food',
  linkTo: '/',
};

export default FoodCard;
