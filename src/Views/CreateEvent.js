import React, { useEffect, useState, useContext } from 'react';

import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';

import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import ContentWrapper from '../Components/ContentWrapper';
import Navbar from '../Components/Navbar/Navbar';

import Client from '../Utils/Client';

const CreateEvent = () => {
  const { state, actions } = useContext(Context);
  const [buildings, setBuildings] = useState([]);
  useEffect(() => {
    async function fetchBuildings() {
      const req = await Client.options('/');
      const data = req.data.actions.POST.building.choices;
      setBuildings(data);
    }
    fetchBuildings();
  }, []);
  return (
    <>
      <PageWrapper>
        <Navbar />
        <ContentWrapper>
          {buildings.map(building => (
            <div>{building.value}</div>
          ))}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default CreateEvent;
