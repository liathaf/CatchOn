import { UtilService } from './UtileService'


const defaultUsers = [{
    "_id": "u101",
    "fullName": "shani choen",
    "userName": "shani choen",
    "password": "tinkerbell",
    "isAdmin": true,
    "imgUrl": "https://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg",
    "rank": 5
},{
    "_id": "u102",
    "fullName": "Ksbok ysno",
    "userName": "avi hiam",
    "password": "tinkerbell",
    "isAdmin": false,
    "imgUrl": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80://beautifulmemory.sg/wp-content/uploads/2019/03/default-avatar-profile-icon-vector-18942381.jpg",
    "rank": 5
}]

var gUsers = _init();

function query() {
	return Promise.resolve(gUsers);
}

function getById(userId) {
	return Promise.resolve(gUsers.find(user => user._id === userId))
}


function _init() {
	var users = UtilService.loadFromStorage('users');
	if (users) return users;
	UtilService.saveToStorage('users', defaultUsers);
	 users = UtilService.loadFromStorage('users');
	return users;
}


export const UserService = {
	query,
	getById,
}