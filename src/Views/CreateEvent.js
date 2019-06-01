import React, { useEffect, useState, useContext } from 'react';

import styled from 'styled-components';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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
    console.log(values);
  }

  return (
    <PageWrapper>
      <Navbar />
      <ContentWrapper>
        <h1>Create Event</h1>
        <Formik
          validationSchema={CreateEventSchema}
          onSubmit={(values, actions) => handleSubmit(values)}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form>
              {/* Event name field */}
              <StyledField type="name" name="name" />
              <ErrorMessage name="name" component="div" />
              {/* Event description field */}
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
              <ErrorMessage name="building" component="div" />
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
