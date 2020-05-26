
import React from 'react'
import { Link } from 'react-router-dom'
import * as moment from 'moment'

export function ReviewPreview(props) {
    const { review } = props
    const { user } = review
    const createAt = moment(review.createdAt).fromNow();
 
    return (
        <div className="review-msg">
            <Link to="">
                <img className="userImg-review" src={user.imgUrl} />
            </Link>
            <div className="review-detail">
                <div className="review-name-date">
                    <Link to="">
                        <p>{user.userName}</p>
                    </Link>
                    <p>{createAt}</p>
                </div>
                <p>{review.msg}</p>
            </div>

        </div>
    )
}

