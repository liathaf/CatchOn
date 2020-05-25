import { UserService } from '../../services/UserService';


export function loadUser(userId) {
  return async dispatch => {
    try {
      const user = await UserService.getById(userId);
      dispatch({ type: 'SET_USER', user })
    } catch (err) {
      console.log('cannot get user', err)
    }
  }
}

export function login(userCreds) {

  return async dispatch => {
    
      const user = await UserService.login(userCreds);
      dispatch(setUser(user));
  
  }

}
export function signup(userCreds) {
  return async dispatch => {
   
    const user = await UserService.signup(userCreds);
    dispatch(setUser(user));
    
  };
}
export function logout() {
  return async dispatch => {
    await UserService.logout();
    dispatch(setUser(null));
  };
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    user
  };
}
