import styled from 'styled-components';

const FoodButton = styled.button`
  display: block;
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

export default FoodButton;
