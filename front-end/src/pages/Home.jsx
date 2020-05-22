import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import { ReactRedux } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/EventActions'
import { EventList } from '../cmps/EventList';


import {Review} from '../cmps/Review'

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
                <div className="group-title container">
                    <h2>Start Your Journey</h2>
                    <Link to="/login">See More ></Link>
                </div>
                <section className="categories container">
                    {this.state.categories.map((category, idx) => (
                        <div className="category-preview">
                            <Link key={idx} to={`/event/${category.name}`}><i class={category.class}></i><p>{category.name}</p></Link>
                        </div>))}
                </section>
                <div className="group-title container">
                    <h2>CatchOn Top Events</h2>
                    <Link to="/login">See More ></Link>
                </div>
                <EventList events={events} />
                {/* {(events) && <Review />} */}
                <section className="about-preview container">
                <Link to="/login" className="btn btn-control">Catch On Event</Link>
                </section>
                <footer>
                <Link className="logo large" to="/">CatchOn </Link>
                    <div class="icons my-1">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-globe fa-2x"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-youtube fa-2x"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                    <div>
                        <span>© 2020 CatchOn</span>
                        <span>·Terms of Service</span>
                        <span>·Privacy Policy</span>
                    </div>
                </footer>
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