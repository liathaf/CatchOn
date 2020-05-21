import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import { ReactRedux } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/eventActions'
import { EventList } from '../cmps/EventList';

import ReviewApp from '../cmps/ReviewApp'

class Home extends Component {

    state = {
        categories: [
            { name: "Sport", class: "fas fa-basketball-ball fa-3x" },
            { name: "Outdoors", class: "fas fa-campground  fa-3x" },
            { name: "Traveling", class: "fas fa-plane fa-3x" },
            { name: "Culinary", class: "fas fa-utensils fa-3x" },
            { name: "Video games", class: "fas fa-gamepad fa-3x" },
            { name: "Coding", class: "fab fa-connectdevelop fa-3x" }
        ]
    }

    componentDidMount() {
        this.props.loadEvents();
    }

    render() {
        const { events } = this.props
        return (
            <>
                <section className="landing">
                    <div className="dark-overlay">
                        <div className="landing-inner container">
                            <h1 className="large">Explore new events and meet new people</h1>
                            <Link to="/login" className="btn btn-primary btn-control">Join CatchOn</Link>
                        </div>
                    </div>
                </section>
                <h1 className="container">Start Your Journey</h1>
                <section className="categories container">
                    {this.state.categories.map((category, idx) => (
                        <div className="category-preview">
                            <Link key={idx} to={`/event/${category}`}><i class={category.class}></i>{category.name}</Link>
                        </div>))}
                </section>
                <h1 className="container">CatchOn Top Events</h1>
                <EventList events={events} />
                {(events) && <ReviewApp />}
            </>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)