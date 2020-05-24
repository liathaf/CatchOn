const initialState = {
    loggedInUser : null
}

export function UserReducer(state = initialState, action) {
 
        switch (action.type) {
          case 'SET_USER':
            return { ...state, loggedInUser: action.user };
          default:
            return state;
        }    
}


