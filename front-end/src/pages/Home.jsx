import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/EventActions'
import { EventList } from '../cmps/EventList';





class _Home extends Component {

    state = {
        categories: [
            { name: "sport", class: "fas fa-basketball-ball fa-3x" },
            { name: "outdoors", class: "fas fa-campground  fa-3x" },
            { name: "traveling", class: "fas fa-plane fa-3x" },
            { name: "culinary", class: "fas fa-utensils fa-3x" },
            { name: "video games", class: "fas fa-gamepad fa-3x" },
            { name: "coding", class: "fab fa-connectdevelop fa-3x" }
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
                        <div className="category-preview" key={idx}>
                            <Link  to={`/event/${category.name}`}><i className={category.class}></i><p>{category.name}</p></Link>
                        </div>))}
                </section>
                <div className="group-title container">
                    <h2>CatchOn Top Events</h2>
                    <Link to="/login">See More ></Link>
                </div>
                <div className="events-home">
                    <EventList events={events} atHome={true}/>
                </div>
                
                <section className="about-preview container">
                <Link to="/login" className="btn btn-control">Catch On Event</Link>
                </section>
                <footer>
                <Link className="logo large" to="/">CatchOn </Link>
                    <div className="icons my-1">
                        <a href="https://www.globe.gov/" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-globe fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube fa-2x"></i>
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram fa-2x"></i>
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

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)