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
      const req = await Client.get('/');
      const events = req.data;
      const newEventArray = [...events];
      dispatch({ type: types.FETCH_EVENTS, payload: newEventArray });
    } catch {
      throw new Error('Could not contact API');
    }
  }

  /**
   * Creates an event and sends it to the API.
   * @param {Object} newEvent
   * Event that will be created on API call.
   * */
  async function CreateEvent(newEvent) {
    dispatch({ type: types.LOADING_START });
    try {
      await Client.post('/', newEvent);
      dispatch({ type: types.CREATE_EVENT });
    } catch (error) {
      throw new Error('Could not contact API', error);
    }
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
    dispatch({ type: types.DELETE_EVENT, payload: newEventArray });
  }

  return {
    FetchEvents,
    CreateEvent,
    DeleteEvent,
  };
}
