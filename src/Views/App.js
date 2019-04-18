import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StateProvider from '../Store/StateProvider';
// Components
import Navbar from '../Components/Navbar';
// Views
import ViewEvents from '../Views/ViewEvents';
import CreateEvent from './CreateEvent';

export default function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ViewEvents} />
          <Route path="/create" exact component={CreateEvent} />
        </Switch>
      </BrowserRouter>
    </StateProvider>
  );
}
