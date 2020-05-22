import React, { Component } from 'react'
import { connect } from 'react-redux';

import { EventsByCategory } from '../cmps/EventsByCategory'
import { EventList } from '../cmps/EventList'
import { loadEvents } from '../store/actions/EventActions'

class _Events extends Component {

    state = {
        currCategory: '',
        filterBy: ''

    }

    componentDidMount() {
        this.setState({ currCategory: this.props.match.params.category })
        this.props.loadEvents();
    }



    render() {
        const { currCategory } = this.state
        const { events } = this.props
        return (
            <div className="events">
                {currCategory && <EventsByCategory category={currCategory} />}
                {!currCategory && <EventList events={events}/>}
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