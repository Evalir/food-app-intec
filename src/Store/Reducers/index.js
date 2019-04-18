import { types, INITIAL_STATE } from '../StoreConfig';

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_EVENT:
      return { ...state, events: action.payload };
    case types.DELETE_EVENT:
    case types.UPDATE_EVENT:
    default:
      return { ...state };
  }
};
