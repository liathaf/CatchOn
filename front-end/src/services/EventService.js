import { UtilService } from './UtileService'
import HttpService from './HttpService'
import Axios from 'axios';


function query(filterBy) {

	var queryStr = '';
	if (filterBy) {
		if (filterBy.title) queryStr += `title=${filterBy.title}`;
        if (filterBy.category) queryStr += `&category=${filterBy.category}`;
        if (filterBy.isFree) queryStr += `&isFree=${filterBy.isFree}`
        if (filterBy.thisMonth) queryStr += `&thisMonth=${filterBy.thisMonth}`
    }
    

	return HttpService.get(`event?${queryStr}`);
}

function getById(eventId) {
	return HttpService.get(`event/${eventId}`);
}


function addReview(event, review) {
	
	review.createdAt = Date.now();
	review._id = UtilService.makeId();
	event.reviews.push(review);
	return HttpService.put(`event/${event._id}`, event);
}


async function save(event) {
    console.log('in event service');
    
    event.createdAt = Date.now();
    event.attendees = [];
    event.reviews = [];
    const savedEvent  = await HttpService.post('event', event);
    return savedEvent;
  }
  


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



export const EventService = {
	query,
	getById,
    addReview,
    save,
	uploadImg,
}

