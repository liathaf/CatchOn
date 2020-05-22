import React from 'react'

import { EventPreview } from './EventPreview'



export function EventList(props) {

    const {category, events } = props
    console.log(category)
    return (
        <div className="event-list container">
            {!category && events.map((event, idx) => { if (idx < 6) return <EventPreview event={event} key={event._id} /> })}
            {category && events.map((event, idx) => { if (category === event.category.toLowerCase()) return <EventPreview event={event} key={event._id} /> })}
        </div>
    )
}
