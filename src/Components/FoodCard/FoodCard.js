import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Card } from './Styled';

const Img = styled.div`
  background: ${props => props.theme.gray_s};
  width: 48px;
  height: 48px;
  border-radius: 100px;
  margin: 0 1em 0 0;
  float: left;
`;

const FoodCard = ({ cardKey, name, description, imgUrl, linkTo, isOpen }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const newName = name.length > 40 ? name.substring(0, 40) + '...' : name;
  const newDescription =
    description.length > 50
      ? description.substring(0, 47) + '...'
      : description;

  return (
    <Card isOpen={isOpen}>
      <Img />
      <h3>{newName}</h3>
      {isOpen && (
        <div>
          <p>{newDescription}</p>
          <div className="button-align">
            <button>klk</button>
          </div>
        </div>
      )}
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
