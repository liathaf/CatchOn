import { UserService } from '../../services/UserService';


export function loadUser(userId){
    return async dispatch => {
        try {
            const user = await UserService.getById(userId);
            dispatch({type: 'SET_USER' , user})
        } catch(err){
            console.log('cannot get user' , err)
        }
    }
}

export function saveUser(user) {
  return async (dispatch) => {
    try {
      const type = user._id ? 'UPDATE_USER' : 'ADD_USER';
      await UserService.save(user);
      dispatch({ type, user });
    } catch (err) {
      console.log('cant save user');
    }
  };
}

