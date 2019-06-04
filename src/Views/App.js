import React, { lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import History from '../Utils/History';
// Theme
import { ThemeProvider } from 'styled-components';
import { theme } from '../Styled/Theme';
import StateProvider from '../Store/Store';

// Components
import WaitingComponent from '../Components/WaitingComponent';
// Views
const ViewEvents = lazy(() => import('./ViewEvents'));
const ViewEvent = lazy(() => import('./ViewEvent'));
const CreateEvent = lazy(() => import('./CreateEvent'));

const App = () => {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <Router history={History}>
          <Switch>
            <Route
              path="/login"
              exact
              component={WaitingComponent(ViewEvents)}
            />
            <Route
              path="/create"
              exact
              component={WaitingComponent(CreateEvent)}
            />
            <Route path="/" exact component={WaitingComponent(ViewEvents)} />
            <Route path="/:id" exact component={WaitingComponent(ViewEvent)} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StateProvider>
  );
};

export default App;
