import React from 'react';

import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';

import { StyledField, Label, ButtonWrapper } from './Styled';
import TimePicker from 'react-time-picker';
import { SuccessButton } from '../Button';
import Alert from '../Alert';
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
  endTime: Yup.string().required('Required'),
});

const EventForm = ({ buildings, handleSubmit }) => (
  <EventCard>
    <h1>Add an event!</h1>
    <Formik
      validationSchema={CreateEventSchema}
      initialValues={{
        name: 'My event',
        description: 'An event with tons of food',
        building: 'AH',
        endTime: '22:00',
      }}
      onSubmit={(values, opts) => {
        console.log(values);
        handleSubmit(values);
      }}
      render={({ status, isSubmitting, isValid, values, setFieldValue }) => (
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
          {/* Time Picker */}
          <TimePicker
            name="endTime"
            value={values['endTime']}
            onChange={e => setFieldValue('endTime', e)}
          />
          {/* Form status message */}
          {!isValid && <Alert>Please, check your values.</Alert>}
          <ButtonWrapper>
            <SuccessButton type="submit" disabled={isSubmitting}>
              Submit
            </SuccessButton>
          </ButtonWrapper>
        </Form>
      )}
    />
  </EventCard>
);

export default EventForm;
