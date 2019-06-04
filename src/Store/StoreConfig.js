export const types = {
  FETCH_EVENT: 'FETCH_EVENT',
  FETCH_EVENTS: 'FETCH_EVENTS',
  CREATE_EVENT: 'CREATE_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
  FETCH_BUILDINGS: 'FETCH_BUILDINGS',
  LOADING_START: 'LOADING_START',
  LOADING_STOP: 'LOADING_STOP',
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  IS_LOGGED_IN: 'LOGGED_IN',
  IS_LOGGED_OUT: 'LOGGED_OUT',
};

export const INITIAL_STATE = {
  events: [],
  currentEvent: {},
  loading: false,
  isLoggedIn: false,
  username: '',
};
