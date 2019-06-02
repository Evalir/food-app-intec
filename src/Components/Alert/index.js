import styled, { keyframes } from 'styled-components';

const swoopIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Alert = styled.div`
  margin: 0 0 1em 0;
  padding: 8px;
  background: #f7d7da;
  color: #711c25;
  border-radius: 4px;
  animation: ${swoopIn} 0.5s ease;
`;

export default Alert;
