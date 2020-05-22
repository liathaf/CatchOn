import React from 'react'

import { EventPreview } from './EventPreview'



export function EventList(props) {

    const { events, atHome } = props
    var limitEvents = events.length;
    if (atHome) limitEvents = 6;
    return (
        <div className="event-list container">
            {events.map((event, idx) => { if (idx < limitEvents) return <EventPreview event={event} key={event._id} /> })}
        </div>
    )
}
