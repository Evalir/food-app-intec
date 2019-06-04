import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import FoodButton from '../FoodButton';
import Alert from '../Alert';

import { StyledField, Label, ButtonWrapper } from './Styled';
import EventCard from '../EventCard';

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
  <EventCard>
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
          <StyledField type="text" name="name" />
          <ErrorMessage name="name" component={Alert} />
          {/* Event description field */}
          <Label htmlFor="description" style={{ display: 'block' }}>
            Event Description
          </Label>
          <StyledField type="text" name="description" />
          <ErrorMessage name="description" component={Alert} />
          {/* Building selection field */}
          <Label htmlFor="building" style={{ display: 'block' }}>
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
          <Label htmlFor="hour" style={{ display: 'block' }}>
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
  </EventCard>
);

export default EventForm;
