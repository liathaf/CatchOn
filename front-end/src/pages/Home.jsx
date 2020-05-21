import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import { ReactRedux } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/eventActions'
import { EventList } from '../cmps/EventList';

class Home extends Component {

    state = {
        categories: [
            { name: "Sport", class: "fas fa-running" },
            { name: "Outdoors", class: "fas fa-running" },
            { name: "Traveling", class: "fas fa-running" },
            { name: "Culinary", class: "fas fa-running" },
            { name: "Video games", class: "fas fa-running" },
            { name: "Coding", class: "fas fa-running" }
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
                        <div className="landing-inner">
                            <h1 className="large">Explore new events and meet new people</h1>
                            <Link to="/login" className="btn btn-primary btn-control">Join CatchOn</Link>
                        </div>
                    </div>
                </section>
                <section className="categories container">

                    {this.state.categories.map((category, idx) => (
                        <div>
                            <i class={category.class}></i>
                            <Link key={idx} to="">{category.name}</Link>
                        </div>))}

                </section>
                <EventList events={events} />
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