import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'

import { EventList } from '../cmps/EventList'
import { EventFilter } from '../cmps/EventFilter'
import { loadEvents, removeEvent } from '../store/actions/EventActions'
class _Events extends Component {
    state = {
        filterBy: {
            
        }
    }
    componentDidMount() {
        this.props.loadEvents();
    }


    onSetFilter = (filter) => {
        this.props.loadEvents(filter);
    }
    render() {
        const { events } = this.props
        return (
            <div className="events">
              
                <EventFilter onSetFilter={this.onSetFilter} />
              <div className="events-prev">
                <EventList events={events} />
              </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        events: state.events.events
    }
}
const mapDispatchToProps = {
    loadEvents
    
}
export const Events = connect(mapStateToProps, mapDispatchToProps)(_Events)