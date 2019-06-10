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
  z-index: 100;
  width: 80%;
  height: ${props => (props.isOpen ? 'auto' : '50px')};
  min-height: ${props => (props.isOpen ? '150px' : 'auto')};
  border: 1px solid red;
  padding: 1em;
  margin-bottom: 16px;
  background-color: #fffefe;
  border-radius: 4px;
  box-shadow: 1 2px 4px 0px ${props => props.theme.gray_p};
  border: 1px solid rgba(112, 117, 122, 0.05000000074505806);
  transition: all 0.2s ease;
  animation: ${flowIn} 0.5s ease;
  .button-align {
    position: absolute;
    right: 5%;
    bottom: 10%;
    float: right;
    margin-right: 1em;
  }
`;
