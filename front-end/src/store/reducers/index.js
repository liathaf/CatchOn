
import { combineReducers } from 'redux';

import { EventReducer } from './EventReducer'
// // import { UserReducer } from './reducers/UserReducer'

;

const rootReducer = combineReducers({
      events: EventReducer,
  // users: UserReducer
})

export default rootReducer;



