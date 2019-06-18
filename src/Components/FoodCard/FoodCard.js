import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
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

const flipUp = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(180deg);
  }
`;

const flipDown = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const Arrow = styled.div`
  grid-column: 3 / -1;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transform: rotate(180deg);
  .flipped {
    animation: ${props => (props.isOpen ? flipUp : flipDown)} 0.75s ease;
    transform: rotate(180deg);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkButton = withRouter(({ history, path, text }) => (
  <Button onClick={() => history.push(path)}>{text}</Button>
));

const FoodCard = ({ cardKey, name, description, imgUrl, linkTo, isOpen }) => {
  const newName = name.length > 40 ? name.substring(0, 40) + '...' : name;
  const newDescription =
    description.length > 50
      ? description.substring(0, 47) + '...'
      : description;

  return (
    <Card isOpen={isOpen}>
      <Img />
      <h4 className="header">{newName}</h4>
      <Arrow isOpen={isOpen}>
        <img src={ArrowSVG} alt="arrow" className={isOpen ? 'flipped' : ''} />
      </Arrow>
      {isOpen && (
        <div className="event-content">
          <p style={{ marginBottom: '2.5em' }}>{newDescription}</p>
          <div className="button-align">
            <LinkButton path={linkTo} text="View Event" />
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
