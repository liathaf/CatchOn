
import React from 'react'

export function EventPreview(props) {
    const { event } = props
    console.log('props from Preview' , props)
    return (
        <div>
            <p>{event.title}</p>
        </div>
    )
}
