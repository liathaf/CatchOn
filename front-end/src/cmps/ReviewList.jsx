import {  ReviewPreview } from './ReviewPreview'

import React from 'react'

export  function ReviewList(props) {
   
    const { reviews } = props
    return (
        <div className="review-list">
           {reviews.map((review) => (<ReviewPreview review={ review } key={review._id}/>))}
        </div>
    )
}
