import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Theme
import { ThemeProvider } from 'styled-components';
import { theme } from '../Styled/Theme';
import StateProvider from '../Store/Store';
// Components
import Navbar from '../Components/Navbar/Navbar';
// Views
import ViewEvents from '../Views/ViewEvents';
import CreateEvent from './CreateEvent';

export default function App() {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ViewEvents} />
            <Route path="/create" exact component={CreateEvent} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StateProvider>
  );
}
