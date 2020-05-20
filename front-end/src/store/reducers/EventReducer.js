const initialState = {
    events: [],
    currEvent: null,
    currFilter: null,
}

export function EventReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_EVENT':
            return {
                ...state, event: action.event
            }
        case 'SET_EVENT':
            return {
                ...state, currToy: action.event
            }

        case 'UPDATE_EVENT':
            return {
                ...state, 
                event: state.event.map(event => {
                    if (event._id === action.event._id) return action.event;
                    else return event
                })
            }

        case 'ADD_EVENT':
            return {
                ...state, event: [...state.event , action.event]
            }
        case 'REMOVE_EVENT':
            return {
                ...state, event: state.event.filter(event => event._id !== action.eventId)
            }
        case 'SET_FILTER':
            return {
                ...state, currFilter:  action.filter
                
            }

        default:
            return state
    }
}