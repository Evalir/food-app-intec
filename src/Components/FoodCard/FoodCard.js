import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Card } from './Styled';
import { Button } from '../Button';

import ArrowSVG from '../../static/ArrowSVG.svg';

const Img = styled.div`
  background: ${props => props.theme.gray_s};
  grid-column: 1 / 2;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  margin: 0 1em 0 0;
  float: left;
`;

const Arrow = styled.div`
  grid-column: 3 / -1;
  width: 32px;
  height: 32px;
  transition: all 0.3s ease;
  cursor: pointer;
  img {
    transform: ${props => (!props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
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
      <Arrow open={isOpen}>
        <img src={ArrowSVG} alt="arrow" />
      </Arrow>
      {isOpen && (
        <div className="event-content">
          <p style={{ marginBottom: '2.5em' }}>{newDescription}</p>
          <div className="button-align">
            <Button>View Event</Button>
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
