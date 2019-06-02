export const types = {
  FETCH_EVENT: 'FETCH_EVENT',
  FETCH_EVENTS: 'FETCH_EVENTS',
  CREATE_EVENT: 'CREATE_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
  FETCH_BUILDINGS: 'FETCH_BUILDINGS',
  LOADING_START: 'LOADING_START',
  LOADING_STOP: 'LOADING_STOP',
};

export const INITIAL_STATE = {
  isSignedIn: false,
  events: [],
  currentEvent: {},
  loading: false,
};
