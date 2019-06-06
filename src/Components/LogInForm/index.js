import React from 'react';

import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import FoodButton from '../FoodButton';
import Alert from '../Alert';

import { StyledField, Label, ButtonWrapper } from './Styled';
import EventCard from '../EventCard';

const LoginSchema = new Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too short')
    .max(20, 'Too long')
    .required('Required!'),
  password: Yup.string()
    .min(8, 'Please, make your password equal or longer to 8 characters')
    .max(100, 'Password too damn long!')
    .required('Please enter your password'),
});

const LogInForm = ({ handleSubmit }) => (
  <EventCard>
    <h1>Log in</h1>
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ username: '', password: '' }}
      onSubmit={(values, opts) => {
        console.log(values);
        handleSubmit(values);
      }}
      render={({ status, isSubmitting, isValid }) => (
        <Form>
          {/* Event name field */}
          <Label htmlFor="username" style={{ display: 'block' }}>
            Username
          </Label>
          <StyledField type="text" name="username" />
          <ErrorMessage name="name" component={Alert} />
          {/* Event description field */}
          <Label htmlFor="password" style={{ display: 'block' }}>
            Password
          </Label>
          <StyledField type="text" name="password" />
          <ErrorMessage name="password" component={Alert} />
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

export default LogInForm;
