import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100vw;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr 1fr 1fr;
  grid-template-areas: 'sidebar content content content';
  grid-gap: 20px;
  @media only screen and (max-width: 990px) {
    grid-template-columns: 300px 1fr 1fr;
    grid-template-areas: 'sidebar content content';
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'content';
  }
`;

export default PageWrapper;
