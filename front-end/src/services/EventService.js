import {
	UtilService
} from './UtileService'
// import axios from 'axios'



const defaultEvents = [{
	"_id": {
	  "$oid": "5ec9c403fc13ae5039000000"
	},
	"title": "Yoga",
	"desc": "Yoga on the beach is both calming and stress-relieving, while helping to stretch and strengthen the body, also meditating with the sounds of the sea. The emphasis is on building awareness of the breath, the body and the nature. Postures are practiced at a slower pace with attention to alignment and detail. My focus and drive for teaching lies in helping individuals to find their own sustainable practice, which can both support and develop their own life.",
	"category": "Health",
	"price": 0,
	"createdBy": {"_id": "1", "userName": "yosi abutbul", "rank": 5, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "11/10/2019",
	"startAt": "18/3/2020",
	"place": "Tel-Aviv beach",
	"capacity": "25",
	"imgUrls": ["https://images.unsplash.com/photo-1508050249562-b28a87434496?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=794&q=80", "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80", "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 2, "userName": "omri Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 3, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 4, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 5, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 6, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 7, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 8, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 9, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 10, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 11, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 12, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 13, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000001"
	},
	"title": "Graffiti tour",
	"desc": "Our Tel Aviv Street Art Tour takes you inside the city’s street art and graffiti scene, which serves as a unique expression of the city’s geographical location, cultural peculiarities, political movements, and artistic sub-cultures. Tel Aviv’s street art tells a story, a multitude of stories, written on the city’s walls and it often takes an expert to decipher these urban tales. Our fully guided Tel Aviv Street Art Tour will take you through the most visible and famous graffiti in town, as well as some of the most hidden pieces of street art, and will uncover their stories for you.",
	"category": "Arts & Culture",
	"price": 40,
	"createdBy": {"_id": "2", "userName": "Shani choen", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "6/8/2019",
	"startAt": "26/8/2019",
	"place": "Tel-Aviv hashalom",
	"capacity": 65,
	"imgUrls": ["https://images.unsplash.com/photo-1556052342-24841f90f433?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80", "https://images.unsplash.com/photo-1565279427445-10c13a1d1f82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80", "https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80", "https://images.unsplash.com/photo-1549381380-a78b5749320c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=377&q=80", "https://images.unsplash.com/photo-1515584292151-a8ce75f68eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 2, "userName": "omri Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 3, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 4, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 5, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 6, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 7, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 8, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 9, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 10, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 11, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 12, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 13, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000002"
	},
	"title": "Long distance bike riding",
	"desc": "We believe that adventure, whether small or large, can be transformative. To live a life of discovery, we must unplug, break from our routines, feel the wind on our brows, and welcome opportunities to feel awe and wonder. A bike is simply the mechanism to get you there. Through inspiration, empowerment, and connection, we open the door to adventure for everyone.",
	"category": "Sport",
	"price": 0,
	"createdBy": {"_id": "3", "userName": "hans goldberg", "rank": 5, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "5/1/2020",
	"startAt": "2/11/2019",
	"place": "Yehuda desert",
	"capacity": 80,
	"imgUrls": ["https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=795&q=80", "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1542397680-c1450496a750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1531502774286-5e4e8e94879f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1571188654248-7a89213915f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 2, "userName": "omri Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 3, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 4, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 5, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 6, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 7, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 8, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 9, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 10, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 11, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 12, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 13, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000003"
	},
	"title": "TRX workout",
	"desc": "Through application of TRX’s Group Coaching System, evolve your coaching techniques and learn the essential knowledge, skills and abilities to effectively coach Group Suspension Training workouts. Upon completion of this course, you will be able to successfully deliver a personalized, motivating group classes of varying fitness levels. We strongly recommend having taken either the TRX Suspension Training Course (STC) and/or TRX Suspension Training Basics Digital Course prior to attending this course.",
	"category": "Sport",
	"price": 150,
	"createdBy": {"_id": "4", "userName": "omer siboney", "rank": 3, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "17/8/2019",
	"startAt": "15/2/2020",
	"place": "Herzelia B-fit studio",
	"capacity": 50,
	"imgUrls": ["https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", "https://images.unsplash.com/photo-1530021356476-0a6375ffe73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80", "https://images.unsplash.com/photo-1586790167861-6e87cdff91b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" , "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 2, "userName": "omri Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 3, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 4, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 5, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 6, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 7, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 8, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 9, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 10, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 11, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 12, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 13, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000004"
	},
	"title": "Bring your dog",
	"desc": "Come and watch some talented dogs strut their stuff with amazing dog displays and fast paced agility.",
	"category": "Pets",
	"price": 0,
	"createdBy": {"_id": "5", "userName": "karen levi", "rank": 3, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "5/9/2019",
	"startAt": "10/12/2019",
	"place": "kfar-saba Hamordim 6",
	"capacity": 60,
	"imgUrls": ["https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80", "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=312&q=80", "https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80", "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 2, "userName": "omri Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 3, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 4, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 5, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 6, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 7, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 8, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 9, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 10, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 11, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 12, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 13, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000005"
	},
	"title": "Southern food festival",
	"desc": "These three days of cooking demos and tastings that benefit the Southern Foodways Alliance bring chefs, vintners and scholars alike to Tennessee every year. The festival explores the South's evolving food culture, which has been returning to its literal roots in recent years by celebrating its rich native agriculture. In 2016, for the 12th year of the festival, chefs such as JJ Johnson of New York and Steven Satterfield of Atlanta, among others, join cookbook author and journalist Dr. Jessica Harris and vintner-in-residence Raj Parr for presentations and group meals.",
	"category": "Culinary",
	"price": 200,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "14/4/2020",
	"startAt": "2/8/2019",
	"place": "Herzelia moshe dayan 6",
	"capacity": 60,
	"imgUrls": ["https://images.unsplash.com/photo-1551883709-2516220df0bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80", "https://images.unsplash.com/photo-1551883738-19ffa3dc4c43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80", "https://images.unsplash.com/photo-1543644806-1c6e324b3c50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80", "https://images.unsplash.com/photo-1544216242-3caec07b8d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1586327917724-60ea09d0af1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 2, "userName": "omri Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 3, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 4, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 5, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 6, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 7, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 8, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 9, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 10, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 11, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 12, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 13, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000006"
	},
	"title": "Camping at the kineret",
	"desc": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
	"category": "Outdoors",
	"price": 170,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "31/8/2019",
	"startAt": "13/2/2020",
	"place": "Tel-Aviv",
	"capacity": 31,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000007"
	},
	"title": "Sell your electronics",
	"desc": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
	"category": "Tech",
	"price": 199,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "21/4/2020",
	"startAt": "9/2/2020",
	"place": "Tel-Aviv",
	"capacity": 28,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000008"
	},
	"title": "Familis Game night",
	"desc": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
	"category": "Family",
	"price": 26,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "31/12/2019",
	"startAt": "26/4/2020",
	"place": "Tel-Aviv",
	"capacity": 35,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000009"
	},
	"title": "Blood donation",
	"desc": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
	"category": "Health",
	"price": 108,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "9/5/2020",
	"startAt": "29/9/2019",
	"place": "Tel-Aviv",
	"capacity": 80,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000000a"
	},
	"title": "Street football",
	"desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
	"category": "Sport",
	"price": 265,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "18/11/2019",
	"startAt": "15/5/2020",
	"place": "Tel-Aviv",
	"capacity": 61,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000000b"
	},
	"title": "Privet tutor",
	"desc": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
	"category": "Learning",
	"price": 228,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "2/5/2020",
	"startAt": "13/2/2020",
	"place": "Tel-Aviv",
	"capacity": 32,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000000c"
	},
	"title": "About Photography",
	"desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	"category": "Photography",
	"price": 164,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "30/5/2019",
	"startAt": "13/9/2019",
	"place": "Tel-Aviv",
	"capacity": 108,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000000d"
	},
	"title": "Make Stakes",
	"desc": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	"category": "Culinary",
	"price": 252,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "17/1/2020",
	"startAt": "17/1/2020",
	"place": "Tel-Aviv",
	"capacity": 85,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000000e"
	},
	"title": "Learning How to Write",
	"desc": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	"category": "Writing",
	"price": 189,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "25/5/2019",
	"startAt": "10/9/2019",
	"place": "Tel-Aviv",
	"capacity": 7,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000000f"
	},
	"title": "Museum Tour",
	"desc": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
	"category": "Arts & Cultur",
	"price": 288,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "2/6/2019",
	"startAt": "28/11/2019",
	"place": "Tel-Aviv",
	"capacity": 56,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000010"
	},
	"title": "Electronic Festival",
	"desc": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	"category": "Music",
	"price": 270,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "16/7/2019",
	"startAt": "3/9/2019",
	"place": "Tel-Aviv",
	"capacity": 132,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000011"
	},
	"title": "Movie Night at Freddis",
	"desc": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
	"category": "Film",
	"price": 149,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "14/11/2019",
	"startAt": "1/10/2019",
	"place": "Tel-Aviv",
	"capacity": 1,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000012"
	},
	"title": "Rocket Leauge Turnament",
	"desc": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
	"category": "Video Games",
	"price": 153,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "23/1/2020",
	"startAt": "13/7/2019",
	"place": "Tel-Aviv",
	"capacity": 41,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000013"
	},
	"title": "Dance Party",
	"desc": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
	"category": "Dance",
	"price": 36,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "19/5/2020",
	"startAt": "27/12/2019",
	"place": "Tel-Aviv",
	"capacity": 141,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000014"
	},
	"title": "Carrer festival",
	"desc": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
	"category": "Carrer & Business",
	"price": 146,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "12/5/2020",
	"startAt": "30/4/2020",
	"place": "Tel-Aviv",
	"capacity": 41,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000015"
	},
	"title": "Dogs Party!",
	"desc": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
	"category": "Pets",
	"price": 90,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "1/5/2020",
	"startAt": "14/5/2020",
	"place": "Tel-Aviv",
	"capacity": 68,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000016"
	},
	"title": "Hackaton at MisterBit",
	"desc": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
	"category": "Coding",
	"price": 62,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "20/12/2019",
	"startAt": "28/10/2019",
	"place": "Tel-Aviv",
	"capacity": 68,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000017"
	},
	"title": "Golan hights track",
	"desc": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
	"category": "Traveling",
	"price": 227,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "17/5/2020",
	"startAt": "25/9/2019",
	"place": "Tel-Aviv",
	"capacity": 109,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000018"
	},
	"title": "JS Leassons",
	"desc": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	"category": "Coding",
	"price": 225,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "30/3/2020",
	"startAt": "10/9/2019",
	"place": "Tel-Aviv",
	"capacity": 16,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000019"
	},
	"title": "Cat Party",
	"desc": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
	"category": "Pets",
	"price": 92,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "6/6/2019",
	"startAt": "11/6/2019",
	"place": "Tel-Aviv",
	"capacity": 75,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000001a"
	},
	"title": "Uniform Romeo",
	"desc": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
	"category": "Carrer & Business",
	"price": 151,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "18/2/2020",
	"startAt": "6/11/2019",
	"place": "Tel-Aviv",
	"capacity": 36,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000001b"
	},
	"title": "Delta Zulu Romeo Golf Papa",
	"desc": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
	"category": "Dance",
	"price": 111,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "25/11/2019",
	"startAt": "25/11/2019",
	"place": "Tel-Aviv",
	"capacity": 46,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000001c"
	},
	"title": "Lima",
	"desc": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
	"category": "Video Games",
	"price": 108,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "10/9/2019",
	"startAt": "25/3/2020",
	"place": "Tel-Aviv",
	"capacity": 15,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000001d"
	},
	"title": "Papa Sierra",
	"desc": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
	"category": "Film",
	"price": 106,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "12/3/2020",
	"startAt": "10/1/2020",
	"place": "Tel-Aviv",
	"capacity": 149,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000001e"
	},
	"title": "Sierra Mike Delta Oscar Kilo",
	"desc": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
	"category": "Music",
	"price": 87,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "31/8/2019",
	"startAt": "8/8/2019",
	"place": "Tel-Aviv",
	"capacity": 48,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000001f"
	},
	"title": "Uniform Oscar Victor",
	"desc": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
	"category": "Arts & Cultur",
	"price": 46,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "24/7/2019",
	"startAt": "10/3/2020",
	"place": "Tel-Aviv",
	"capacity": 141,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000020"
	},
	"title": "Whiskey Sierra Foxtrot",
	"desc": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	"category":  "Writing",
	"price": 272,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "20/11/2019",
	"startAt": "25/2/2020",
	"place": "Tel-Aviv",
	"capacity": 47,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000021"
	},
	"title": "Victor Golf Echo",
	"desc": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
	"category": "Culinary",
	"price": 36,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "26/6/2019",
	"startAt": "26/10/2019",
	"place": "Tel-Aviv",
	"capacity": 76,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000022"
	},
	"title": "Sierra Oscar Echo",
	"desc": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
	"category": "Photography",
	"price": 113,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "8/1/2020",
	"startAt": "19/7/2019",
	"place": "Tel-Aviv",
	"capacity": 143,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000023"
	},
	"title": "India Golf",
	"desc": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
	"category": "Learning",
	"price": 138,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "3/10/2019",
	"startAt": "22/1/2020",
	"place": "Tel-Aviv",
	"capacity": 48,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000024"
	},
	"title": "Echo Uniform Charlie Tango",
	"desc": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
	"category": "Sport",
	"price": 193,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "11/2/2020",
	"startAt": "17/11/2019",
	"place": "Tel-Aviv",
	"capacity": 46,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000025"
	},
	"title": "Papa Quebec Charlie",
	"desc": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
	"category": "Health",
	"price": 36,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "30/7/2019",
	"startAt": "22/2/2020",
	"place": "Tel-Aviv",
	"capacity": 66,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000026"
	},
	"title": "Golf Alfa Charlie",
	"desc": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	"category": "Family",
	"price": 227,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "4/11/2019",
	"startAt": "11/8/2019",
	"place": "Tel-Aviv",
	"capacity": 134,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000027"
	},
	"title": "Tango Charlie",
	"desc": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	"category": "Tech",
	"price": 300,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "4/6/2019",
	"startAt": "21/5/2020",
	"place": "Tel-Aviv",
	"capacity": 128,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000028"
	},
	"title": "Quebec Golf Oscar India",
	"desc": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
	"category": "Outdoors",
	"price": 72,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "30/9/2019",
	"startAt": "25/9/2019",
	"place": "Tel-Aviv",
	"capacity": 5,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000029"
	},
	"title": "Kilo Papa",
	"desc": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
	"category": "Tech",
	"price": 166,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "20/3/2020",
	"startAt": "14/3/2020",
	"place": "Tel-Aviv",
	"capacity": 133,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000002a"
	},
	"title": "India Oscar",
	"desc": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	"category": "Sport",
	"price": 161,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "7/11/2019",
	"startAt": "29/4/2020",
	"place": "Tel-Aviv",
	"capacity": 52,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000002b"
	},
	"title": "Juliett Golf November",
	"desc": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
	"category": "Video Games",
	"price": 200,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "17/2/2020",
	"startAt": "19/7/2019",
	"place": "Tel-Aviv",
	"capacity": 50,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000002c"
	},
	"title": "Zulu Sierra",
	"desc": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
	"category": "Dance",
	"price": 11,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "3/7/2019",
	"startAt": "23/3/2020",
	"place": "Tel-Aviv",
	"capacity": 122,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000002d"
	},
	"title": "Oscar",
	"desc": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
	"category": "Pets",
	"price": 250,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "11/9/2019",
	"startAt": "27/2/2020",
	"place": "Tel-Aviv",
	"capacity": 94,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000002e"
	},
	"title": "Papa Yankee Foxtrot Golf",
	"desc": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
	"category": "Coding",
	"price": 144,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "22/7/2019",
	"startAt": "15/7/2019",
	"place": "Tel-Aviv",
	"capacity": 55,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae054000002f"
	},
	"title": "Uniform",
	"desc": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
	"category": "Traveling",
	"price": 156,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "5/4/2020",
	"startAt": "17/9/2019",
	"place": "Tel-Aviv",
	"capacity": 83,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 2, "userName": "omri Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 3, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 4, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 5, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 6, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 7, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 8, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 9, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 10, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 11, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 12, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 13, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000030"
	},
	"title": "Zulu Victor Alfa Mike Romeo",
	"desc": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
	"category": "Traveling",
	"price": 173,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "27/4/2020",
	"startAt": "3/2/2020",
	"place": "Tel-Aviv",
	"capacity": 57,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 2, "userName": "omri Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 3, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 4, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 5, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 6, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 7, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 8, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 9, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 10, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 11, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 12, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 13, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }, {
	"_id": {
	  "$oid": "5ec9c552fc13ae0540000031"
	},
	"title": "Mike Golf Hotel",
	"desc": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
	"category": "Video Games",
	"price": 125,
	"createdBy": {"_id": "6", "userName": "Ron dori", "rank": 4, "imgUrl": "https://source.unsplash.com/random"},
	"createdAt": "25/11/2019",
	"startAt": "31/3/2020",
	"place": "Tel-Aviv",
	"capacity": 1,
	"imgUrls": ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
	"attendees": [{"_id": 1, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 2, "userName": "omri Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 3, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 4, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 5, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 6, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 7, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 8, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 9, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 10, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 11, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 12, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}, {"_id": 13, "userName": "Shani Choen", "imgUrl": "https://source.unsplash.com/random"}],
	"reviews": []
  }]

var gEvents = _init();
const CATEGORIES = ["outdoors", "tech", "family", "health", "sport", "learning", "photography", "culinary", "writing", "arts & cultur", "music", "film", "video Games", "dance", "carrer & business", "pets", "coding", "traveling"];

function query() {
	return Promise.resolve(gEvents);
}

function getById(eventId) {

	return Promise.resolve(gEvents.find(event => event._id.$oid === eventId))
}


function addReview(eventId, review) {

	review.createdAt = Date.now();
	review._id = UtilService.makeId();

	const eventIdx = _findIdxById(eventId);

	gEvents[eventIdx].reviews.push(review);

	UtilService.saveToStorage('events', gEvents);

	return Promise.resolve(gEvents[eventIdx])
}

function _findIdxById(id) {
	return gEvents.findIndex(event => event._id === id)
}

function _init() {

	var events = UtilService.loadFromStorage('events');
	if (events) return events;
	UtilService.saveToStorage('events', defaultEvents);
	events = UtilService.loadFromStorage('events');
	console.log(events);
	return events;
}

function getCategories() {
	return CATEGORIES;
}


function setCategoryBackground(category) {
	const obj = gCategoryPhotos.find(obj => obj.category === category);
	if (obj) return obj.img;
}

const gCategoryPhotos = [
	{ category: "sport", img: "https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" },
	{ category: "outdoors", img: "https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1417&q=80" },
	{ category: "traveling", img: "https://images.unsplash.com/photo-1567502401034-b947ee46e249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80" },
	{ category: "culinary", img: "https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
	{ category: "video games", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
	{ category: "coding", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
	{ category: "tech", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
	{ category: "family", img: "https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
	{ category: "health", img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" },
	{ category: "learning", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
	{ category: "photography", img: "https://images.unsplash.com/photo-1542992669-58b851a73881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80" },
	{ category: "writing", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" },
	{ category: "arts & cultur", img: "https://images.unsplash.com/photo-1553519495-a6384546a328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=736&q=80" },
	{ category: "music", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
	{ category: "film", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=740&q=80" },
	{ category: "dance", img: "https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" },
	{ category: "carrer & business", img: "https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" },
	{ category: "pets", img: "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" },
]

export const EventService = {
	query,
	getById,
	addReview,
	getCategories,
	setCategoryBackground,
}


