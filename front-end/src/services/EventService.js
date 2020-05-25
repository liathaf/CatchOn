import { UtilService } from './UtileService'
import HttpService from './HttpService'

const CATEGORIES = ['sport', 'outdoors', 'traveling', 'culinery', 'gamming', 'coding'];

const gCategoryPhotos = [{
	category: "sport",
	img: "https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
},
{
	category: "outdoors",
	img: "https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1417&q=80"
},
{
	category: "traveling",
	img: "https://images.unsplash.com/photo-1567502401034-b947ee46e249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80"
},
{
	category: "culinary",
	img: "https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
},
{
	category: "gamming",
	img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
},
{
	category: "coding",
	img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
}
]

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


function getCategories() {
	return CATEGORIES;
}


function setCategoryBackground(category) {
	const obj = gCategoryPhotos.find(obj => obj.category === category);
	if (obj) return obj.img;
}


export const EventService = {
	query,
	getById,
	addReview,
	getCategories,
	setCategoryBackground,
}

