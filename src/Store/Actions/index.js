import { types } from '../StoreConfig';
import Client from '../../Utils/Client';

/**
 * Custom hook for actions.
 * @param {any} state
 * Current state passed in.
 * @param {function} dispatch
 * Dispatch function to dispatch actions.
 */
export function useActions(state, dispatch) {
  /**
   * Fetches events from API.
   */
  async function FetchEvents() {
    try {
      dispatch({ type: types.LOADING_START });
      const req = await Client.get('/');
      console.log('API call succesfull:', req);
      const events = req.data;
      const newEventArray = [...events];
      setTimeout(() => console.log('loaded'), 1000);
      dispatch({ type: types.FETCH_EVENT, payload: newEventArray });
    } catch {
      throw new Error('Could not contact API');
    }
  }

  /**
   * Creates an event and sends it to the API.
   * @param {Object} newEvent
   * Event that will be created on API call.
   * */
  function CreateEvent(newEvent) {
    const newEventArray = [...state.events, newEvent];
    console.log('dispatching new array:', newEventArray);
    dispatch({ type: types.CREATE_EVENT, payload: newEventArray });
  }

  /**
   * Deletes an event that belongs to the corresponding user.
   * @param {Object} eventToDelete
   * The event specified to be "deleted" from the API.
   */
  function DeleteEvent(eventToDelete) {
    const newEventArray = state.events.filter(
      event => event.name !== eventToDelete.name,
    );
    console.log('dispatching new array:', newEventArray);
    dispatch({ type: types.DELETE_EVENT, payload: newEventArray });
  }

  return {
    FetchEvents,
    CreateEvent,
    DeleteEvent,
  };
}
