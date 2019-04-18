import React, { useContext } from 'react';
import { Context } from '../Store/AppContext';

export default function T() {
  const state = useContext(Context);
  console.log(state);
  return <div>{state.message}</div>;
}
