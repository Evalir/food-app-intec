import React, { useEffect, useContext } from 'react';

import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';

import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import ContentWrapper from '../Components/ContentWrapper';
import Navbar from '../Components/Navbar/Navbar';

import Client from '../Utils/Client';

const CreateEvent = () => {
  const { state, actions } = useContext(Context);
  useEffect(() => {
    actions.fetchBuildings();
  }, []);
  return (
    <>
      <PageWrapper>
        <Navbar />
        <ContentWrapper>Klk wawawa</ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default CreateEvent;
