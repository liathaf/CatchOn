import React from 'react'
import { Link } from 'react-router-dom'

import {timeService} from '../services/TimeService.js'
import avatar from '../img/avatar.jpg'

export function EventPreview(props) {
    const { event } = props
    let imageChoice = 0;
    const price = (event.price === 0) ? "Free" : "$" + event.price;
    const userImg = (event.createdBy.imgUrl) ? event.createdBy.imgUrl : avatar;
    
    return (
        <div className="event-preview">
            <Link to={`/event/${event._id}`}>
                <img className="event-img" src={event.imgUrls[imageChoice]} />
            </Link>
            {/* <div className="button-container">
                <button className="btn" onClick={() => {
                 imageChoice+1;
                }}>left</button>
                <button className="btn">right</button>
            </div> */}
            <div className="event-content">

                <div className="content-top">
                    <div className="user-rank-avatar">
                        <Link to={`/user/${event.createdBy._id}`} className="user-prev">
                            <img className="userImg-preview" src={userImg}></img>
                            <p className="username-prev">{event.createdBy.username}</p>
                        </Link>
                        {/* <div className="user-rank"><i className="fas fa-star"></i><p>5.0</p></div> */}
                    </div>
                        <h3>5/10<i className="far fa-user"></i></h3>
                </div>

                <div className="event-price-title">
                    <h3>{event.title}</h3>
                    <p className={`event-price ${(event.price === 0) ? 'free' : ''}`}>{price}</p>
                </div>
                <div>
                    <div className="event-time-place">
                        <p>{event.place}</p>
                        <p>{timeService.convertToRelativeTime(event.startAt)}</p>
                    </div>
                    {/* <div className="event-price">
                    </div> */}
                </div>
            </div>
        </div>
    )
}
