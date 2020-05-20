


import React from 'react'

export function EventPreview(props) {
    const { event } = props
    return (
        <div>
            <img src={ event.imgUrl} />
        </div>
    )
}
