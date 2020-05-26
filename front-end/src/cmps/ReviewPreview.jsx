
import React from 'react'
import { Link } from 'react-router-dom'
import * as moment from 'moment'

import avatar from '../img/avatar.jpg'

export function ReviewPreview(props) {
    const { review } = props
    const { user } = review
    const createAt = moment(review.createdAt).fromNow();


    return (
        <div className="review-msg">
            <Link to="">
                {(user) && <img className="userImg-review" src={(user.imgUrl) ? user.imgUrl : avatar} />}
                {(!user) && <img className="userImg-review" src={avatar} />}
            </Link>
            <div className="review-detail">
                <div className="review-name-date">
                    <Link to="">
                        {(user) && <p>{review.user.userName}</p>}
                        {(!user) && <p>guest</p>}
                    </Link>
                    <p>{createAt}</p>
                </div>
                <p>{review.msg}</p>
            </div>

        </div>
    )
}

