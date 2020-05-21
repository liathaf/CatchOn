// import axios from 'axios';

// export function login(data) {
//     return dispatch => {
//         return axios.post('/api/auth', data);
//     }
// }


// async await try

//   return async dispatch => {

//             try {
//                 const user = await axios.post('/api/auth', data);
//                 return user
//             } catch(err) {
//                 console.log('Having problems in userAction');
//             }

//         }

const user = {

    "_id": "u101",
    "fullName": "Orly Amdadi",
    "userName": "orly@amdadi.com",
    "password": "tinkerbell",
    "isAdmin": true,
    "imgUrl": "http://some-img",
    "rank": 5
}


function getUser(){

    return Promise.resolve(user)
}

export const UserService = {

    getUser
}