import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { EventsByCategory } from '../cmps/EventsByCategory'
import { EventList } from '../cmps/EventList'
import { EventFilter } from '../cmps/EventFilter'
import { loadEvents } from '../store/actions/EventActions'

class _Events extends Component {

    state = {
        
        filterBy: {
            currCategory: ''
        }

    }

    componentDidMount() {
        const category = this.props.match.params.category;
        this.setState(prevState=>({...prevState.filterBy , currCategory: category}))
        this.props.loadEvents();
    }

    onSetFilter = (filter) => {
        
    }

    render() {
        const { currCategory } = this.state
        const { events } = this.props
     
        return (
            <div className="events">
                {currCategory && <EventsByCategory category={currCategory} events={events} />}
                {!currCategory && <EventList events={events}/>}

                <EventFilter onSetFilter={this.onSetFilter}/>
            </div>

     
            // <section className="events-prev">
            //     <div className="main-img-events landing">
                    
            //         <div className="dark-overlay">
            //         <EventFilter />
            //         </div>
            //     </div>
               
            //     {/* {currCategory && <EventsByCategory category={currCategory} />} */}
            //     {!this.state.currCategory && <EventList events={events} />}
            //     </section>
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