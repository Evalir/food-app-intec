import { types, INITIAL_STATE } from '../StoreConfig';

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_EVENT:
      return { ...state, currentEvent: action.payload, loading: false };
    case types.FETCH_EVENTS:
      return { ...state, events: action.payload, loading: false };
    case types.CREATE_EVENT:
      return { ...state, loading: false };
    case types.DELETE_EVENT:
      return { ...state, events: action.payload, loading: false };
    case types.UPDATE_EVENT:
      throw new Error('Unexpected Action');
    case types.FETCH_BUILDINGS:
      return { ...state, buildings: action.payload, loading: false };
    case types.LOG_IN:
      return { ...state, isLoggedIn: true, username: action.payload };
    case types.LOG_OUT:
      return { ...state, isLoggedIn: false, username: '' };
    case types.IS_LOGGED_IN:
      return { ...state, isLoggedIn: true };
    case types.IS_LOGGED_OUT:
      return { ...state, isLoggedIn: false, username: '' };
    default:
      return { ...state };
  }
};
