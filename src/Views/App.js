import React, { lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import History from '../Utils/History';

// Theme
import { ThemeProvider } from 'styled-components';
import { newTheme } from '../Styled/Theme';
import GlobalStyles from '../Styled/GlobalStyles';
import StateProvider from '../Store/Store';

// Components
import WaitingComponent from '../Components/WaitingComponent';
// Views
const ViewEvents = lazy(() => import('./ViewEvents'));
const ViewEvent = lazy(() => import('./ViewEvent'));
const CreateEvent = lazy(() => import('./CreateEvent'));
const LogIn = lazy(() => import('./LogIn'));

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
