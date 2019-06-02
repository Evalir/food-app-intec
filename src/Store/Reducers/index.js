import { types, INITIAL_STATE } from '../StoreConfig';

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_EVENT:
      return { ...state, event: action.payload, loading: false };
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
    default:
      return { ...state };
  }
};
