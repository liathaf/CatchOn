
import React from 'react'
import { Link } from 'react-router-dom'
import * as moment from 'moment'

export function ReviewPreview(props) {
    const { review } = props
    const { user } = review;
    const createAt = moment(review.createdAt).fromNow();
    return (
        <div className="msg">
            <Link to="" className="user-details">
                <img className="userImg-review" src={user.imgUrl} />
                <p>{user.userName}</p>
            </Link>
                <p>{createAt}</p>
                <p>{review.msg}</p>
        </div>
    )
}
