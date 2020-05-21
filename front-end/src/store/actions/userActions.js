import axios from 'axios';

export function login(data) {
    return async dispatch => {
    
        try {
            const user = await axios.post('/api/auth', data);
            return user
        } catch(err) {
            console.log('Having problems in userAction');
        }
       
    }
}


// async await try

  