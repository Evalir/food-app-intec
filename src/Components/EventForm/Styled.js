import styled from 'styled-components';
import { Field } from 'formik';

export const StyledField = styled(Field)`
  display: block;
  width: 100%;
  height: 32px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ced4da;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
