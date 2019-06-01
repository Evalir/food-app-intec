import React, { useEffect, useState, useContext } from 'react';

import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import moment from 'moment';
import * as Yup from 'yup';
import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import ContentWrapper from '../Components/ContentWrapper';
import Navbar from '../Components/Navbar/Navbar';
import FoodButton from '../Components/FoodButton';

import Client from '../Utils/Client';

const CreateEventSchema = new Yup.object().shape({
  name: Yup.string()
    .min(5, 'too short')
    .max(70, 'Too long')
    .required('Required!'),
  description: Yup.string()
    .min(10, 'Too short')
    .max(100, 'Too long')
    .required('Required!'),
  building: Yup.string().required('Required'),
});

const StyledField = styled(Field)`
  display: block;
  width: 100%;
  max-width: 400px;
  height: 24px;
  display: inline-block;
  margin-bottom: 1em;
`;

const CreateEvent = () => {
  const { actions } = useContext(Context);
  const [buildings, setBuildings] = useState([]);
  // Fetch buildings
  useEffect(() => {
    async function fetchBuildings() {
      const req = await Client.options('/');
      const data = req.data.actions.POST.building.choices;
      setBuildings(data);
    }
    fetchBuildings();
  }, []);

  function handleSubmit(values) {
    const newHour = +values.hour < 10 ? '0' + values.hour : values.hour;
    const newMinutes =
      +values.minutes < 10 ? '0' + values.minutes : values.minutes;
    const date = moment(newHour + ':' + newMinutes, 'HH:mm');
    const valuesObject = {
      name: values.name,
      description: values.description,
      building: values.building,
      time: date.toDate(),
    };
    console.log(valuesObject);
  }

  return (
    <PageWrapper>
      <Navbar />
      <ContentWrapper>
        <h1>Create Event</h1>
        <Formik
          validationSchema={CreateEventSchema}
          onSubmit={values => handleSubmit(values)}
          render={({ status, isSubmitting }) => (
            <Form>
              {/* Event name field */}
              <label htmlFor="name" style={{ display: 'block' }}>
                Event Name
              </label>
              <StyledField type="name" name="name" />
              <ErrorMessage name="name" component="div" />
              {/* Event description field */}
              <label htmlFor="name" style={{ display: 'block' }}>
                Event Description
              </label>
              <StyledField type="text" className="error" name="description" />
              <ErrorMessage name="description" component="div" />
              {/* Building selection field */}
              <StyledField component="select" name="building">
                {buildings.map(building => (
                  <option value={building.value} key={building.value}>
                    {building.display_name}
                  </option>
                ))}
              </StyledField>
              <Field component="select" name="hour">
                {[...Array(12).keys()]
                  .map(x => x + 1)
                  .map(opt => (
                    <option value={opt} key={opt}>
                      {opt}
                    </option>
                  ))}
              </Field>
              <Field component="select" name="minutes">
                {[...Array(60).keys()]
                  .map(x => x + 1)
                  .map(opt => (
                    <option value={opt} key={opt}>
                      {opt}
                    </option>
                  ))}
              </Field>
              {/* Form status message */}
              {status && status.msg && <div>{status.msg}</div>}
              <FoodButton type="submit" disabled={isSubmitting}>
                Submit
              </FoodButton>
            </Form>
          )}
        />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default CreateEvent;
