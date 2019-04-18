export const types = {
  CREATE_EVENT: 'CREATE_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
};

export const INITIAL_STATE = {
  hello: 'world',
  message: 'hello',
  events: [{ name: 'Food club' }, { name: 'Free food' }, { name: 'Bon' }],
};

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
