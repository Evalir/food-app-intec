import { types, INITIAL_STATE } from '../StoreConfig';

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CREATE_EVENT:
    case types.DELETE_EVENT:
      return { ...state, events: action.payload };
    case types.UPDATE_EVENT:
      throw new Error('Unexpected Action');
    default:
      return { ...state };
  }
};
