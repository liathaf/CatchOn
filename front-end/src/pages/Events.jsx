import React, { Component } from 'react'
import { connect } from 'react-redux';


import { EventList } from '../cmps/EventList'
import { EventFilter } from '../cmps/EventFilter'
import { loadEvents, removeEvent } from '../store/actions/EventActions';

class _Events extends Component {
    state = {
      filterBy: null
      
    }
    componentDidMount() {
        this.props.loadEvents();
    }


    onSetFilter = (filterBy) => {
    
      this.setState({ filterBy }, () => {
        this.props.loadEvents(filterBy );
      })
      
  }



    render() {
        const { events } = this.props
        return (
            <div className="events">

              <div className="filter">
              <EventFilter onSetFilter={this.onSetFilter}/>
              </div>
              
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
    loadEvents,
    removeEvent
    
}
export const Events = connect(mapStateToProps, mapDispatchToProps)(_Events)