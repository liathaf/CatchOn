import Axios from 'axios';
import HttpService from './HttpService'


const defaultUsers = [{
    "_id": "u101",
    "fullName": "shani choen",
    "userName": "shani choen",
    "password": "tinkerbell",
    "isAdmin": true,
    "imgUrl": "https://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg",
    "rank": 5
}, {
    "_id": "u102",
    "fullName": "Ksbok ysno",
    "userName": "avi hiam",
    "password": "tinkerbell",
    "isAdmin": false,
    "imgUrl": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg",
    "rank": 5
}]


async function uploadImg(ev) {

    const CLOUD_NAME = 'dlzwnajfq';
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append('file', ev.target.files[0]);
    formData.append('upload_preset', 'aeyn7n9g');
    try {
        const res = await Axios.post(UPLOAD_URL, formData);
        return res.data.url;
    } catch (err) {
        console.error(err)
    }
}


async function login(userCred) {
    try {
        const user = await HttpService.post('auth/login', userCred);
        return _handleLogin(user)
    } catch (err) {
        throw(err)
    }
}

async function signup(userCred) {
    try {
        const user = await HttpService.post('auth/signup', userCred)
        return _handleLogin(user)
    } catch (err) {
        throw err;
    }
}

async function logout() {
    await HttpService.post('auth/logout');
    sessionStorage.clear();
}

function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}

export const UserService = {
    login,
    logout,
    signup,
    uploadImg
}