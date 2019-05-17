export const types = {
  CREATE_EVENT: 'CREATE_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
};

export const INITIAL_STATE = {
  isSignedIn: false,
  events: [{ name: 'Food club' }, { name: 'Free food' }, { name: 'Bon' }],
};
