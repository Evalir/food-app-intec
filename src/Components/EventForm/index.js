import React from 'react';

import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import FoodButton from '../FoodButton';
import Alert from '../Alert';

const StyledField = styled(Field)`
  display: block;
  width: 100%;
  height: 32px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ced4da;
  margin-bottom: 1em;
`;

const Event = styled.div`
  border: 1px solid #ced4da;
  border-radius: 8px;
  box-shadow: 5px 0px 27px 1px rgba(149, 135, 164, 0.48);
  margin: 0 auto;
  padding: 1em;
  width: 300px;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateEventSchema = new Yup.object().shape({
  name: Yup.string()
    .min(5, 'Too short')
    .max(70, 'Too long')
    .required('Required!'),
  description: Yup.string()
    .min(10, 'Too short')
    .max(100, 'Too long')
    .required('Required!'),
  building: Yup.string().required('Required'),
  hour: Yup.string().required('Required'),
  minutes: Yup.string().required('Required'),
});

const EventForm = ({ buildings, handleSubmit }) => (
  <Event>
    <h1>Add an event!</h1>
    <Formik
      validationSchema={CreateEventSchema}
      onSubmit={(values, opts) => {
        console.log(values);
        handleSubmit(values);
      }}
      render={({ status, isSubmitting, isValid }) => (
        <Form>
          {/* Event name field */}
          <Label htmlFor="name" style={{ display: 'block' }}>
            Event Name
          </Label>
          <StyledField type="name" name="name" />
          <ErrorMessage name="name" component={Alert} />
          {/* Event description field */}
          <Label htmlFor="name" style={{ display: 'block' }}>
            Event Description
          </Label>
          <StyledField type="text" className="error" name="description" />
          <ErrorMessage name="description" component={Alert} />
          {/* Building selection field */}
          <Label htmlFor="name" style={{ display: 'block' }}>
            Event Building
          </Label>
          <StyledField component="select" name="building">
            {buildings.map(building => (
              <option value={building.value} key={building.value}>
                {building.display_name}
              </option>
            ))}
          </StyledField>
          {/* datetime component */}
          <Label htmlFor="name" style={{ display: 'block' }}>
            End time (HH:mm)
          </Label>
          <Field component="select" name="hour">
            {[...Array(12).keys()]
              .map(x => x + 1)
              .map(opt => (
                <option value={+opt < 10 ? '0' + opt : opt} key={opt}>
                  {+opt < 10 ? '0' + opt : opt}
                </option>
              ))}
          </Field>
          <Field component="select" name="minutes">
            {[...Array(60).keys()]
              .map(x => x + 1)
              .map(opt => (
                <option value={+opt < 10 ? '0' + opt : opt} key={opt}>
                  {+opt < 10 ? '0' + opt : opt}
                </option>
              ))}
          </Field>
          {/* Form status message */}
          {!isValid && <Alert>Please, check your values.</Alert>}
          <ButtonWrapper>
            <FoodButton type="submit" disabled={isSubmitting}>
              Submit
            </FoodButton>
          </ButtonWrapper>
        </Form>
      )}
    />
  </Event>
);

export default EventForm;
