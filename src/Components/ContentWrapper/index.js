import styled from 'styled-components';

const ContentWrapper = styled.div`
  grid-area: content;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 1em;
  overflow-y: scroll;
  @media only screen and (max-width: 768px) {
    margin-top: 64px;
  }
`;

export default ContentWrapper;
