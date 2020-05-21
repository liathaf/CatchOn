import React, { Component } from 'react'
import { connect } from 'react-redux';

import { EventsByCategory } from '../cmps/EventsByCategory'
import { EventList } from '../cmps/EventList'
import { loadEvents } from '../store/actions/EventActions'

class EventsPage extends Component {

    state = {
        currCategory: '',
        filterBy: ''
        
    }

    componentDidMount() {
        this.setState({currCategory: this.props.match.params.category})
        this.props.loadEvents();
    }

    

    render() {
    const { currCategory } = this.state
    const { events } = this.props    
        return (
            
            <div className="events-page">
               { currCategory && <EventsByCategory category={ currCategory } />}
               { !currCategory && <div className="all-events container">
                   <EventList events={events}/>
                </div>}

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

export const Events = connect(mapStateToProps, mapDispatchToProps)(EventsPage)