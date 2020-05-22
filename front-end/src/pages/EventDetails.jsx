import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { loadEvent, addReview } from '../store/actions/EventActions'
import { Review } from '../cmps/Review'


// {
//     "_id": "1",
//     "title": "Yoga",
//     "desc": "Yoga on the beach is both calming and stress-relieving, while helping to stretch and strengthen the body, also meditating with the sounds of the sea. The emphasis is on building awareness of the breath, the body and the nature. Postures are practiced at a slower pace with attention to alignment and detail. My focus and drive for teaching lies in helping individuals to find their own sustainable practice, which can both support and develop their own life.",
//     "category": "Health & Medidation",
//     "price": 0,
//     "createdBy": { "_id": "1", "userName": "yosi abutbul", "rank": 5, "imgUrl": "blablba.jpg" },
//     "createdAt": "02/06/2020 6pm",
//     "startAt": "21/06/2020 6pm",
//     "place": "Tel-Aviv beach",
//     "capacity": 30,
//     "imgUrls": ["https://cdn.groo.co.il/_media/media/10592/254596.jpg", "blabla2.jpg"],
//     "attendees": [{ "_id": "2", "userName": "Shani choen", "imgUrl": "blabla" }],
//     "reviews": [],
// },

class _EventDetails extends Component {

    componentDidMount() {
        const { eventId } = this.props.match.params;
        this.props.loadEvent(eventId);
    }

    onAddReview = (msg) => {
      
        const { event } = this.props;
        // const { user } = this.props;
        const review = {
            msg,
            user: {

                "_id": "u101",
                "fullName": "Orly Amdadi",
                "userName": "liron",
                "password": "tinkerbell",
                "isAdmin": true,
                "imgUrl": "data:image/jpeg;base64,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",
                "rank": 5
            }
        }

        this.props.addReview(event._id, review);
    }

    render() {
        const { event } = this.props;
        return (
            (event) &&
            <section className="event-detail">
                <h2>{event.title}</h2>
                <p>{event.desc}</p>
                <Link to="">{event.category}</Link>
                <p>${event.price}</p>
                <div className="user-preview">
                    <p>{event.createdBy.userName}</p>
                    <img className="userImg-details" src={event.createdBy.imgUrl} />
                    <p>{event.createdBy.rank}</p>
                </div>
                <Review onAddReview={this.onAddReview} reviews={event.reviews} />
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.events.currEvent,
        user: state.users.loggedInUser
    }
}

const mapDispatchToProps = {
    loadEvent,
    addReview
}

export const EventDetails = connect(mapStateToProps, mapDispatchToProps)(_EventDetails)