import React, { lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import History from '../Utils/History';

// Theme
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, newTheme } from '../Styled/Theme';
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
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  background: white;
  overflow-x: hidden;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 33px;
}

h3 {
  font-size: 28px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 20px;
}

h6 {
  font-size: 18px;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

p {
  font-size: 14px;
  color: #70757a;
  margin: 0;
  padding: 0;
}

*:focus {
  outline: none;
}
button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
}
`;

const routes = [
  {
    path: '/login',
    exact: true,
    component: WaitingComponent(LogIn),
  },
  {
    path: '/create',
    exact: true,
    component: WaitingComponent(CreateEvent),
  },
  {
    path: '/',
    exact: true,
    component: WaitingComponent(ViewEvents),
  },
  {
    path: '/:id',
    exact: true,
    component: WaitingComponent(ViewEvent),
  },
];

const Routes = routes => (
  <Router history={History}>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);

const App = () => {
  return (
    <StateProvider>
      <GlobalStyles />
      <ThemeProvider theme={newTheme}>{Routes(routes)}</ThemeProvider>
    </StateProvider>
  );
};

export default App;
