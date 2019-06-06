import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import {
  Card,
  ImageContainer,
  FoodImage,
  InfoWrapper,
  FoodTitle,
  FoodLink,
} from './Styled';

const FoodCard = ({ cardKey, name, description, imgUrl, linkTo }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const newName = name.length > 25 ? name.substring(0, 20) + '...' : name;
  const newDescription =
    description.length > 50
      ? description.substring(0, 47) + '...'
      : description;

  return (
    <Card key={cardKey}>
      <ImageContainer>
        {!imgLoaded && (
          <div style={{ marginLeft: '70px' }}>
            <Loader type="Oval" color="#817E8E" height={80} width={80} />
          </div>
        )}
        <FoodImage src={imgUrl} onLoad={() => setImgLoaded(true)} />
      </ImageContainer>
      <InfoWrapper>
        <FoodTitle>{newName}</FoodTitle>
        <p>{newDescription}</p>
        <FoodLink to={linkTo}>View</FoodLink>
      </InfoWrapper>
    </Card>
  );
};

FoodCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

FoodCard.defaultProps = {
  name: 'No name provided',
  description: 'No description provided.',
  imgUrl: 'https://source.unsplash.com/random/250x200?food',
  linkTo: '/',
};

export default FoodCard;
