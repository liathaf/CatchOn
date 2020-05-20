import { bindActionCreators } from "redux"
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

