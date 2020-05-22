
import React from 'react'
import { Link } from 'react-router-dom'

export function EventPreview(props) {
    const { event } = props
    return (
        <div className="event-preview">
            <Link to={`/event/${event._id}`}><img className="event-img" src={event.imgUrls[0]} /></Link>
            <div className="event-content">
                <Link to="" className="usr-prev">
                    <img className="userImg-preview" src={event.imgUrl}></img>
                    <p className="username-prev">{event.createdBy.userName}</p>
                </Link>
                <h3>{event.title}</h3>
                <Link to="" className="category">{event.category}</Link>
                <p>{event.place}</p>
                <p>{event.startAt}</p>
                <hr></hr>
                <p>${event.price}</p>
            </div>
        </div>
    )
}
