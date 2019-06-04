export const types = {
  FETCH_EVENT: 'FETCH_EVENT',
  FETCH_EVENTS: 'FETCH_EVENTS',
  CREATE_EVENT: 'CREATE_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
  FETCH_BUILDINGS: 'FETCH_BUILDINGS',
  LOADING_START: 'LOADING_START',
  LOADING_STOP: 'LOADING_STOP',
  LOGGED_IN: 'LOGGED_IN',
};

export const INITIAL_STATE = {
  events: [],
  currentEvent: {},
  loading: false,
  isSignedIn: false,
  username: '',
};
