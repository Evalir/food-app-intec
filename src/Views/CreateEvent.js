import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';

import { Context } from '../Store/Store';

import withAuth from '../Components/withAuth';
import PageWrapper from '../Components/PageWrapper';
import ContentWrapper from '../Components/ContentWrapper';
import Navbar from '../Components/Navbar/Navbar';
import EventForm from '../Components/EventForm';
import Client from '../Utils/Client';

// Login-protected Component
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

  function handleSubmit({ name, description, building, hour, minutes }) {
    const time = moment(hour + ':' + minutes, 'HH:mm').toDate();
    const event = {
      title: name,
      building,
      description,
      start: moment().toDate(),
      end: time,
    };
    console.log(event);
    actions.CreateEvent(event);
  }

  return (
    <PageWrapper>
      <Navbar />
      <ContentWrapper>
        <EventForm buildings={buildings} handleSubmit={handleSubmit} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default withAuth(CreateEvent);
