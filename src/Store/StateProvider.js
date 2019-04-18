import React, { useEffect, useReducer } from 'react';
import { INITIAL_STATE } from './StoreConfig';
import { reducer } from './Reducers';
import { useActions } from './Actions';

export const Context = React.createContext(INITIAL_STATE);

export default function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const actions = useActions(state, dispatch);

  // log new state
  useEffect(() => console.log({ newState: state }), [state]);

  return (
    <Context.Provider value={{ state, dispatch, actions }}>
      {children}
    </Context.Provider>
  );
}
