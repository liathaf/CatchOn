import {  EventPreview } from './EventPreview'

import React from 'react'

export  function EventList(props) {
   
    const { events } = props
    return (
        <div className="event-list container">
           {events.map((event) => (<EventPreview event={ event } key={event._id}/>))}
        </div>
    )
}
