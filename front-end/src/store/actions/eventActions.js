import { EventService } from '../../services/EventService';

export function loadEvents() {
  return async (dispatch) => {
    try {
      const events = await EventService.query();
      dispatch({ type: 'SET_EVENTS', events });
    } catch (err) {
      console.log('cannot get events', err);
    }
  };
}

export function loadEvent(eventId){
    
    return async dispatch => {
        try {
            const event = await EventService.getById(eventId);
            dispatch({type: 'SET_EVENT' , event})
        } catch(err){
            console.log('cannot get event' , err)
        }
    }
  
}

export function removeEvent(eventId) {
  return async (dispatch) => {
    try {
      await EventService.remove(eventId);
      dispatch({ type: 'REMOVE_TOY', eventId });
    } catch (err) {
      console.log('cannot remove event');
    }
  };
}

export function saveEvent(event) {
  return async (dispatch) => {
    try {
      const type = event._id ? 'UPDATE_EVENT' : 'ADD_EVENT';
      await EventService.save(event);
      dispatch({ type, event });
    } catch (err) {
      console.log('cant save event');
    }
  };
}

export function addReview(eventId, review) {
  return async (dispatch) => {
    try {
      const event = await EventService.addReview(eventId, review);
      dispatch({ type: 'UPDATE_EVENT', event });
    } catch (err) {
      console.log('cannot update event', err);
    }
  };
}
