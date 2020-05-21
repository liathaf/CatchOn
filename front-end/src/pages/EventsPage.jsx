import React, { Component } from 'react'
import { connect } from 'react-redux';


class EventsPage extends Component {

    state = {
        events: null
    }


    render() {
        return (
            <div className="events-page">
                <h1>Hello</h1>
                <img src="https://images.unsplash.com/photo-1478428036186-d435e23988ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {
  
}

export const Events = connect(mapStateToProps, mapDispatchToProps)(EventsPage)