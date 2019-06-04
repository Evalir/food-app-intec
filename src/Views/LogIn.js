import React, { useEffect, useState, useContext } from 'react';

import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import ContentWrapper from '../Components/ContentWrapper';
import Navbar from '../Components/Navbar/Navbar';
import LogInForm from '../Components/LogInForm';

// Login-protected Component
const CreateEvent = () => {
  const { actions } = useContext(Context);
  // Fetch buildings
  useEffect(() => {}, []);

  function handleSubmit(stuff) {
    actions.LogIn(stuff);
  }

  return (
    <PageWrapper>
      <Navbar />
      <ContentWrapper>
        <LogInForm handleSubmit={handleSubmit} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default CreateEvent;
