import React, { lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import History from '../Utils/History';

// Theme
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../Styled/Theme';
import StateProvider from '../Store/Store';

// Components
import WaitingComponent from '../Components/WaitingComponent';
// Views
const ViewEvents = lazy(() => import('./ViewEvents'));
const ViewEvent = lazy(() => import('./ViewEvent'));
const CreateEvent = lazy(() => import('./CreateEvent'));
const LogIn = lazy(() => import('./LogIn'));

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

body,
html {
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  background: white;
  overflow-x: hidden;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

p {
  margin: 0;
  padding: 0;
}

*:focus {
  outline: none;
}
`;

const App = () => {
  return (
    <StateProvider>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router history={History}>
          <Switch>
            <Route path="/login" exact component={WaitingComponent(LogIn)} />
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
