
import { EventService } from '../../services/EventService'

export function loadEvents() {

    return async dispatch => {

        try {
            const events = await EventService.query();
            dispatch({ type: 'SET_EVENTS', events })

        } catch (err) {
            console.log('cannot get events' , err)
        }

    }

    
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

export function addReview(eventId , preview){

    return async dispatch => {
        try {
            const event = await EventService.addReview(eventId , preview);
            dispatch({type: 'UPDATE_EVENT' , event})
        } catch(err){
            console.log('cannot update event' , err)
        }

    }
}

