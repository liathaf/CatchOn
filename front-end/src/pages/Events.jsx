import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'


import { EventList } from '../cmps/EventList'
import { EventFilter } from '../cmps/EventFilter'
import { loadEvents } from '../store/actions/EventActions'

class _Events extends Component {

    state = {
        filterBy: {
            category: ''
        }

    }

    componentDidMount() {
        const { category } = this.props.match.params;
        this.props.loadEvents({ category });
        this.setState(prevState => ({ ...prevState.filterBy, category }))
    }

    onSetFilter = (filter) => {
        this.props.loadEvents(filter);
        this.setState(prevState => ({ ...prevState.filterBy, category: filter.category }))
    }

    render() {
        const { category } = this.state
        const { events } = this.props
     
        return (
            <div className="events events-prev">
                <EventList events={events}/>
                <EventFilter onSetFilter={this.onSetFilter} />
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