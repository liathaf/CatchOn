import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import { EventReducer } from './reducers/EventReducer'
// import { UserReducer } from './reducers/UserReducer'


const rootReducer = combineReducers({
  events: EventReducer,
  // users: UserReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

