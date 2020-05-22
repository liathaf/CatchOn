import React from 'react'

import { EventPreview } from './EventPreview'



export function EventList(props) {

    const { events } = props
    return (
        <div className="event-list container">
            {events.map((event, idx) => { if (idx < 6) return <EventPreview event={event} key={event._id} /> })}
        </div>
    )
}
