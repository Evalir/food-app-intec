import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  min-height: 300px;
  width: 200px;
  border-radius: 8px;
  background: white;
  margin: 2px;
`;

export const ImageContainer = styled.div`
  min-height: 120px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background: palevioletred;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-top: 1em;
`;

export const FoodTitle = styled.h2`
  line-height: 2em;
`;

export const FoodLink = styled(Link)`
  display: block;
  margin-top: 40px;
  padding: 0 auto;
  color: palevioletred;
  background: transparent;
  border: 3px solid palevioletred;
  border-radius: 3px;
  text-align: center;
  font-size: 1em;
  width: 100px;
  align-self: center;
  text-decoration: none;
  transition: all 0.2s;
  :hover {
    color: white;
    background: palevioletred;
  }
`;
