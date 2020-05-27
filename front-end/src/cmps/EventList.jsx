import React from 'react'

import { EventPreview } from './EventPreview'



export function EventList(props) {

    const { events, atHome  } = props
    var limitEvents = events.length;
    console.log(events);
    if (atHome) limitEvents = 4;
    return (
        <div className="event-list  container">
            {events.map((event, idx) => { if (idx < limitEvents) return <EventPreview event={event} key={event._id} /> })}
        </div>
    )
}
