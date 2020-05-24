import { UtilService } from './UtileService'
import HttpService from './HttpService'

const CATEGORIES = ['sport', 'outdoors', 'traveling', 'culinery', 'gamming', 'coding'];

const defaultEvents = [{
	
		"title": "Yoga",
		"desc": "Yoga on the beach is both calming and stress-relieving, while helping to stretch and strengthen the body, also meditating with the sounds of the sea. The emphasis is on building awareness of the breath, the body and the nature. Postures are practiced at a slower pace with attention to alignment and detail. My focus and drive for teaching lies in helping individuals to find their own sustainable practice, which can both support and develop their own life.",
		"category": "Health & Medidation",
		"price": 0,
		"createdBy": {
			"_id": "1",
			"userName": "yosi abutbul",
			"rank": 5,
			"imgUrl": "data:image/jpeg;base64,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"
		},
		"createdAt": "02/06/2020 6pm",
		"startAt": "21/06/2020 6pm",
		"place": "Tel-Aviv beach",
		"capacity": 30,
		"imgUrls": ["https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1529156446057-63af7e5c1337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80", "https://cdn.groo.co.il/_media/media/10592/254596.jpg", "https://images.unsplash.com/photo-1590136499863-3e17a9d725b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1590114023219-92944998ddb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"],
		"attendees": [{
			"_id": "2",
			"userName": "Shani choen",
			"imgUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
		}],
		"reviews": [],
	},
	{
		
		"title": "Graffiti tour",
		"desc": "Our Tel Aviv Street Art Tour takes you inside the city’s street art and graffiti scene, which serves as a unique expression of the city’s geographical location, cultural peculiarities, political movements, and artistic sub-cultures. Tel Aviv’s street art tells a story, a multitude of stories, written on the city’s walls and it often takes an expert to decipher these urban tales. Our fully guided Tel Aviv Street Art Tour will take you through the most visible and famous graffiti in town, as well as some of the most hidden pieces of street art, and will uncover their stories for you.",
		"category": "Arts & Culture",
		"price": 0,
		"createdBy": {
			"_id": "2",
			"userName": "Shani choen",
			"rank": 4,
			"imgUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANEA8NDg8VDg8PDQ0OEA0QDw8NEBIQFRIWGBQSFRUYHigiGRolGxUTIjEhJSk3Li4uFx8zODMsOCgtLisBCgoKDg0OGxAQGysmIB8tLS0rLSsuLS0tLS0tLS0tKy0tKy0uNystLS0tLSstLystLS0tLS0tLS0rLS03Ky0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQUGBAMC/8QAPRABAAIBAQQFCQUFCQAAAAAAAAECAxEEBSExBhJBUXETIjJSYXKBkbFCobLB0SMzYoKSFiQ0Q1NzouHw/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAMBAQADAQEAAAAAAAAAAQIRMQNBITJRExL/2gAMAwEAAhEDEQA/ANmA7GIAAAAAAAAAAIASJx0tadKxNp7oiZn7nZi3Rnt/l6e9Na/dzRbInTiFpG4M2ms2pXxtP6Ku0aTMa66TMaxy+BLLw0CEpQAAAAAAAAAAAAAAAAAAISgB6YNnvlnq0rNp9nKPGexbbs3JN4i+bWteynK0+Pcv8WKtI6tKxWI7IjRnl6ScWmKi2bo9M8ct+r/DXjPzlZ7PurDj5Ui0+tfzp+/g7Rjc7V9RFaxHCI0juiNEgqlR9JcmSIrWNYxzHnTHKba8ImWfbu9YtExMaxPCYnjEqDem5NNb4I1jtx85/l7/AAbeec4plFGBDZRIAAAAAAAAAAAAAAAAAIXm4N2xbTPkjWPsVn8UqjZcPlL0x+taIbatYrERHCIiIiPZDL0y1NL4xIDBcAAAAABTb73X14nNjjzo42rH2o749v1ZxvGU37ssYsszHo3jrxHdOvGPn9W3nl8Uyn1XgNlAAAAAAAAAAAAAABCUSDt3N+/xe9P4Za9ktxxrtGP+af8AjLWsPXrTHgAyWAAAAAAFD0pj9zP+5H4V8o+lPo4vev8ASF/P9kZcZ9KEulkAAAAAAAAAAAAAAISgFhuGP7xTwv8AhlrGV6Pfv6+7f6NU5/XrTHgAzWAAAAAAFH0p9HF71/pC8UfSn0cXvX+kL+f7Iy4z6UQl0sgAAAAAAAAAAAAABCUAsej/APiKe7f8MtW4NyVr5DHMRGultZ0jXXrTq73Nnd1rjPwAKJAAAAAAFH0p9HF71/pC8eG27PTJWfKViYrFpie2OHOFsbq7ReMUlEJdTIAAAAAAAAAAAAAAQlANX0fvrgrHq2vX79fzWKj6MZuGTH2xMXiPZPCfy+a8cuc1lWs4AKpAAAAAAHjtturjyT3Y7/hl7ODfuWKYLx220pHxn9IlMm6VkoSiEutiAAAAAAAAAAAAAAIlID02XPOK9clZ06sx8Y7YbeJ14xyniwbZbrydfDinXXzIifGOH5MfWfV8XUAxXAAAAAAGV3/tU5Ms0183H5sR7ftT+XwajJeKVm08qxNp8Ihh8t5ta1p52tNp8ZnVr5T87Vyr5hKIS3ZgAAAAAAAAAAAAAAAC+6NbXwtgnnr16/nH5/NQppeazFqzpMTrEx2SrljuaTLpuhzbt2mc2KuSY0mdYnu1idNXS5rNNQBAAAAAqekW19TH5KPSyc/ZWJ4/+8WZe+37TOXJa898xEd1Y5Q8HVhjqMrd0SCyAAAAAAAAAAAAAAAEAlAA1+5adXBj9sTb5zMu14bBTq4sde7HT6PdyXraACAAAABhLc58ZQSOxikAAAAAAAAAAAAAAEAAANFuXdmOccZMlYvN9ZjXjERE6RwZ6lZtMVjjMzERHtlttlw+TpTH6tYjXvntll63UWxj1gBg0AAAAAAUO/8Ad9KUjLSsVmLRFojhExPbooWz3ls/lsV8cc5jWPGJ1j6MZPB0ed3GeUSA0VAAAAAAAAAAEJQADv2TdGbLx6vUr61+Hyjmi2TqXA9tm2TJlnTHSbe3lHz5NFsm48WPSbftLfxcK/0/qtIjThHCI7I4Qzvr/Fpipt2blnFauTJaJmvGKRHDXxXIMblb1aTQAhIAAAAAAo947jm1rZMVo86ZtNLcOM89JXgnHKziLNsRn2a+KdL0mvjHD4TyebdWrExpMaxPOJjWFZtW48V+NNcc/wAPGvy/RtPWfVbizA79r3RmxazFfKV9anH5xzcDSWXioAlAAAAAIWuw7jvk0tk/Z17vtz8Oz4otk6mTarjjwjjPdzWux7iyX0nJ+zr3c7/Ls+K+2TYceGPMrpPrTxtPxdDHL1/i8xcmybtxYdJrXW0fbt51v+vg6wZ27WAEAAAAAAAAAAAAAAA5dr3fizenXj68cLfPt+LqEy6Gb2zcN68cU+Uj1Z0i36SqL0mszW0TWY5xMaS3by2jZqZY0yVi0e3nHhPY0x9b9VuLEC723cE11thnrR6ltIt8J7VNkpNZmtomsxziY0ltMpeKWaQIEoazdu6qYNLT5+T155R7sdiwByW29bACAAAAAAAAAAAAAAAAAAAAAAAc+27HTPXq3jj2W7Yn2OgJdDPf2cv/AKtf6ZQ0Qv8A6ZI/5gAokAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z"
		},
		"createdAt": "02/06/2020 6pm",
		"startAt": "21/06/2020 6pm",
		"place": "Tel-Aviv",
		"capacity": 15,
		"imgUrls": ["https://images.unsplash.com/photo-1565279427445-10c13a1d1f82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80", "https://images.unsplash.com/photo-1529156446057-63af7e5c1337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80", "https://cdn.groo.co.il/_media/media/10592/254596.jpg", "https://images.unsplash.com/photo-1590136499863-3e17a9d725b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1590114023219-92944998ddb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"],
		"attendees": [{
			"_id": "2",
			"userName": "Shani choen",
			"imgUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
		}, {
			"_id": "4",
			"userName": "barosh magon",
			"imgUrl": "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
		}],
		"reviews": []
	},
	{
		
		"title": "Long distance bike riding",
		"desc": "We believe that adventure, whether small or large, can be transformative. To live a life of discovery, we must unplug, break from our routines, feel the wind on our brows, and welcome opportunities to feel awe and wonder. A bike is simply the mechanism to get you there. Through inspiration, empowerment, and connection, we open the door to adventure for everyone.",
		"category": "Sport",
		"price": 0,
		"createdBy": {
			"_id": "3",
			"userName": "hans goldberg",
			"rank": 5,
			"imgUrl": "data:image/jpeg;base64,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"
		},
		"createdAt": "12/06/2020 10am",
		"startAt": "21/06/2020 6pm",
		"place": "Yehuda desert",
		"capacity": 50,
		"imgUrls": ["https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1529156446057-63af7e5c1337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80", "https://cdn.groo.co.il/_media/media/10592/254596.jpg", "https://images.unsplash.com/photo-1590136499863-3e17a9d725b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1590114023219-92944998ddb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"],
		"attendees": [{
			"_id": "3",
			"userName": "Shani choen",
			"imgUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
		}],
		"reviews": []
	},
	{
		
		"title": "TRX workout",
		"desc": "Through application of TRX’s Group Coaching System, evolve your coaching techniques and learn the essential knowledge, skills and abilities to effectively coach Group Suspension Training workouts. Upon completion of this course, you will be able to successfully deliver a personalized, motivating group classes of varying fitness levels. We strongly recommend having taken either the TRX Suspension Training Course (STC) and/or TRX Suspension Training Basics Digital Course prior to attending this course.",
		"category": "Sport",
		"price": 150,
		"createdBy": {
			"_id": "4",
			"userName": "omer siboney",
			"rank": 3,
			"imgUrl": "data:image/jpeg;base64,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"
		},
		"eventRate": 3,
		"createdAt": "01/06/2020 4pm",
		"startAt": "21/06/2020 6pm",
		"place": "Herzelia B-fit studio",
		"capacity": 25,
		"imgUrls": ["https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1529156446057-63af7e5c1337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80", "https://cdn.groo.co.il/_media/media/10592/254596.jpg", "https://images.unsplash.com/photo-1590136499863-3e17a9d725b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1590114023219-92944998ddb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"],
		"attendees": [{
			"_id": "4",
			"userName": "Shani choen",
			"imgUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
		}],
		"reviews": []
	},
	{
		
		"title": "Bring your dog",
		"desc": "Come and watch some talented dogs strut their stuff with amazing dog displays and fast paced agility.",
		"category": "Animals",
		"price": 0,
		"createdBy": {
			"_id": "5",
			"userName": "karen levi",
			"rank": 3,
			"imgUrl": "data:image/jpeg;base64,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"
		},
		"createdAt": "16/07/2020 6pm",
		"startAt": "21/06/2020 6pm",
		"place": "kfar-saba Hamordim 6",
		"capacity": 20,
		"imgUrls": ["https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80", "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"],
		"attendees": [{
			"_id": "5",
			"userName": "Shani choen",
			"imgUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
		}],
		"reviews": []
	},
	{
		
		"title": "Southern food festival",
		"desc": "These three days of cooking demos and tastings that benefit the Southern Foodways Alliance bring chefs, vintners and scholars alike to Tennessee every year. The festival explores the South's evolving food culture, which has been returning to its literal roots in recent years by celebrating its rich native agriculture. In 2016, for the 12th year of the festival, chefs such as JJ Johnson of New York and Steven Satterfield of Atlanta, among others, join cookbook author and journalist Dr. Jessica Harris and vintner-in-residence Raj Parr for presentations and group meals.",
		"category": "Food",
		"price": 200,
		"createdBy": {
			"_id": "6",
			"userName": "Ron dori",
			"rank": 4,
			"imgUrl": "data:image/jpeg;base64,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"
		},
		"createdAt": "20/08/2020 8pm",
		"startAt": "21/06/2020 6pm",
		"place": "Herzelia moshe dayan 6",
		"capacity": 60,
		"imgUrls": ["https://images.unsplash.com/photo-1551883709-2516220df0bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80", "https://images.unsplash.com/photo-1529156446057-63af7e5c1337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80", "https://cdn.groo.co.il/_media/media/10592/254596.jpg", "https://images.unsplash.com/photo-1590136499863-3e17a9d725b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1590114023219-92944998ddb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"],
		"attendees": [{
			"_id": "6",
			"userName": "Shani choen",
			"imgUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
		}],
		"reviews": []
	}
]

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

