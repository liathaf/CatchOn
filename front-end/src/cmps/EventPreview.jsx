import React from 'react'
import { Link } from 'react-router-dom'

import { timeService } from '../services/TimeService.js'
import avatar from '../img/avatar.jpg'

export function EventPreview(props) {
    const { event } = props
    const price = (event.price === 0) ? "Free" : "$" + event.price;
    console.log(event)
    const userImg = (event.createdBy.imgUrl) ? event.createdBy.imgUrl : avatar;

    return (
        <div className="event-preview">
            <Link to={`/event/${event._id}`}>
                <img className="event-img" src={event.imgUrls[0]} />
            </Link>
            <Link to={`/user/${event.createdBy._id}`} className="user-prev">
                <img className="userImg-preview" src={userImg}></img>
            </Link>
            <h5 className="attendees">{event.attendees.length}/{event.capacity}<i className="far fa-user"></i></h5>
            <div className="event-content">
                {/* <div>
                    <i className="fas fa-heart">{event.likes.length}</i>
                </div> */}

                <div className="event-content">
                    <div className="event-price-title">
                        <h3>{event.title}</h3>
                        <p className={`event-price ${(event.price === 0) ? 'free' : ''}`}>{price}</p>
                    </div>
                    <div>
                        <div className="event-time-place">
                            <p>{event.place}</p>
                            <p>{timeService.convertToRelativeTime(event.startAt)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
