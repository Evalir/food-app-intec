import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={WaitingComponent(ViewEvents)} />
            <Route
              path="/create"
              exact
              component={WaitingComponent(CreateEvent)}
            />
            <Route path="/:id" exact component={WaitingComponent(ViewEvent)} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StateProvider>
  );
};

export default App;
