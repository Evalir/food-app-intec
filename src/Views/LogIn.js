import React, { useContext } from 'react';

import { Context } from '../Store/Store';

import PageWrapper from '../Components/PageWrapper';
import ContentWrapper from '../Components/ContentWrapper';
import Navbar from '../Components/Navbar/Navbar';
import LogInForm from '../Components/LogInForm';

const LogIn = () => {
  const { actions } = useContext(Context);

  function handleSubmit(credentials) {
    actions.LogIn(credentials);
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

export default LogIn;
