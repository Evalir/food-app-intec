import { types } from '../StoreConfig';
import Client from '../../Utils/Client';
import Auth from '../../Utils/Auth';
import History from '../../Utils/History';
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
      const req = await Client.get('/api/event/');
      const events = req.data;
      const newEventArray = [...events];
      dispatch({ type: types.FETCH_EVENTS, payload: newEventArray });
    } catch {
      throw new Error('Could not contact API');
    }
  }
  /**
   * Fetches a single event from the API.
   * @param {string} id
   * the id of the event to fetch.
   */
  async function FetchSingleEvent(id) {
    try {
      const req = await Client.get(`/event/${id}`);
      const event = req.data;
      dispatch({ type: types.FETCH_EVENT, payload: event });
    } catch (err) {
      throw new Error('Could not contact API', err);
    }
  }

  /**
   * Creates an event and sends it to the API.
   * @param {Object} newEvent
   * Event that will be created on API call.
   * */
  async function CreateEvent(newEvent) {
    try {
      const req = await Client.post('/api/event/', newEvent, {
        headers: {
          Authorization: `Token ${Auth.getToken()}`,
        },
      });
      console.log(req.status);
      dispatch({ type: types.CREATE_EVENT });
    } catch (err) {
      throw new err('Could not contact API', err);
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

  function LogIn(userInfo) {
    const success = Auth.logIn(userInfo);
    if (success) {
      History.push('/');
      dispatch({ type: types.LOGGED_IN });
    } else {
      console.log('error when logging in');
      dispatch({ type: 'ERROR' });
    }
  }

  function LogOut() {
    const success = Auth.LogOut();
    if (success) {
      History.push('/');
    }
  }

  return {
    FetchEvents,
    FetchSingleEvent,
    CreateEvent,
    DeleteEvent,
    LogIn,
  };
}
