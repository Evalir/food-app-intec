import { types } from '../StoreConfig';

export function useActions(state, dispatch) {
  function CreateEvent(newEvent) {
    const newEventArray = [...state.events, newEvent];
    console.log('dispatching new array:', newEventArray);
    dispatch({ type: types.CREATE_EVENT, payload: newEventArray });
  }

  function DeleteEvent(eventToDelete) {
    const newEventArray = state.events.filter(
      event => event.name !== eventToDelete.name,
    );
    console.log('dispatching new array:', newEventArray);
    dispatch({ type: types.DELETE_EVENT, payload: newEventArray });
  }
  return {
    CreateEvent,
    DeleteEvent,
  };
}
