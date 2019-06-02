import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const flowIn = keyframes`
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const Card = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 40% 1fr;
  min-height: 310px;
  width: 225px;
  border: 1px solid #ad9ebe;
  border-radius: 8px;
  background: white;
  margin: 8px;
  animation: ${flowIn} 0.5s ease;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-height: 100%;
  width: 100%;
  border-radius: 7px 7px 0 0;
  background: transparent;
`;

export const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px 7px 0 0;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding-top: 8px;
`;

export const FoodTitle = styled.h2`
  font-size: 1em;
  line-height: 2em;
`;

export const FoodLink = styled(Link)`
  position: absolute;
  bottom: 5%;
  color: white;
  text-transform: uppercase;
  background: linear-gradient(130.77deg, #302939 -33.61%, #221d27 141.74%);
  box-shadow: 0px 4px 12px rgba(139, 99, 190, 0.3);
  border-radius: 4px;
  text-align: center;
  width: 100px;
  line-height: 32px;
  align-self: center;
  text-decoration: none;
  transition: all 0.2s;
  :hover {
    color: white;
    transform: translateY(-10%);
  }
`;
