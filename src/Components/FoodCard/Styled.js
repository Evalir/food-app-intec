import styled, { keyframes } from 'styled-components';

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
  grid-template-columns: 20% auto 10%;
  z-index: 100;
  width: 80%;
  height: ${props => (props.isOpen ? 'auto' : '80px')};
  min-height: ${props => (props.isOpen ? '150px' : 'auto')};
  border: 1px solid red;
  padding: 1em;
  margin-bottom: 16px;
  background-color: #fffefe;
  border-radius: 4px;
  box-shadow: 1px 2px 4px 0px ${props => props.theme.gray_p};
  border: 1px solid rgba(112, 117, 122, 0.05000000074505806);
  transition: all 0.2s ease;
  animation: ${flowIn} 0.5s ease;

  .header {
    grid-column: 2 / 3;
  }

  .button-align {
    position: absolute;
    right: 5%;
    bottom: 10%;
    float: right;
    margin-right: 1em;
  }

  .event-content {
    grid-column: 1 / -1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    grid-template-columns: 20% 1fr;
  }
`;
