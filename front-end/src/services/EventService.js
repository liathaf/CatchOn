import { UtilService } from './UtileService'
import HttpService from './HttpService'


function query(filterBy) {
	var queryStr = '';
	if (filterBy.category) queryStr = `?category=${filterBy.category.toLowerCase()}`
	return HttpService.get(`event${queryStr}`);
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


export const EventService = {
	query,
	getById,
	addReview,
}

