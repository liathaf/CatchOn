import React from 'react'

import { EventPreview } from './EventPreview'



export function EventList(props) {

    const {category, events, atHome  } = props
    var limitEvents = events.length;
    if (atHome) limitEvents = 6;
    return (
        <div className="event-list container">
            {!category && events.map((event, idx) => { if (idx < limitEvents) return <EventPreview event={event} key={idx} /> })}
            {category && events.map((event, idx) => { if (category === event.category.toLowerCase()) return <EventPreview event={event} key={idx} /> })}
        </div>
    )
}
