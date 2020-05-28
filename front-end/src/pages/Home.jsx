import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/EventActions'
import { EventList } from '../cmps/EventList';



class _Home extends Component {

    state = {
        categories: [
            { name: "sport", className: "fas fa-basketball-ball fa-3x" },
            { name: "outdoors", className: "fas fa-campground  fa-3x" },
            { name: "traveling", className: "fas fa-plane fa-3x" },
            { name: "culinary", className: "fas fa-utensils fa-3x" },
            { name: "gaming", className: "fas fa-gamepad fa-3x" },
            { name: "health", className: "fas fa-heartbeat fa-3x" },
            { name: "Arts & Culture", className: "fas fa-palette fa-3x" },
            { name: "Pets", className: "fas fa-paw fa-3x" },
            { name: "Tech", className: "fas fa-microchip fa-3x" },
            { name: "Family", className: "fas fa-home fa-3x" },
            { name: "Learning", className: "fas fa-graduation-cap fa-3x" },
            { name: "Photography", className: "fas fa-camera-retro fa-3x" },
            { name: "Writing", className: "fas fa-pen-square fa-3x" },
            { name: "Music", className: "fas fa-music fa-3x" },
            { name: "Film", className: "fas fa-film fa-3x" },
            { name: "Dance", className: "fas fa-child fa-3x" },
            { name: "Carrier & Business", className: "fas fa-briefcase fa-3x" },
            { name: "coding", className: "fab fa-connectdevelop fa-3x" }
        ]
    }

    componentDidMount() {
        this.props.loadEvents();
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
    }

    render() {
        const { events } = this.props
        return (
            <>
                <div className="top-on"></div>
                <section className="landing">
                    {/* <div className="main-img">
                        <img className="group1-main-img" src={group1}></img>
                        <img className="group2-main-img" src={group2}></img>
                    </div> */}
                    <div className="landing-inner container">
                        <h1 className="large">Explore new events and meet new people.</h1>
                        {/* <Link to="/login" className="btn btn-primary">Join VENYOU</Link> */}
                        <div>
                            <div className="home-search">
                            <i className="fas fa-search fa-lg"></i>
                                <input type="text" />
                            </div>
                                <button className="btn btn-primary">Search</button>
                        </div>
                        <div className="landing-categories">
                            <h4>Popular:</h4>
                            <Link to="/" className="btn"> Coding</Link>
                            <Link to="/" className="btn">Gaming </Link>
                            <Link to="/" className="btn">Music </Link>
                            <Link to="/" className="btn">Pets </Link>
                        </div>
                    </div>
                </section>
                <div className="group-title container">
                    <h2>Sport</h2>
                    <Link to="/event"> <h4><span>S</span><span>e</span><span>e </span><span>M</span><span>o</span><span>r</span><span>e </span><span>></span></h4></Link>
                </div>
                <div className="events-home">
                    <EventList events={events} atHome={true} />
                </div>
                <div className="group-title container">
                    <h2>Health</h2>
                    <Link to="/event"> <h4><span>S</span><span>e</span><span>e </span><span>M</span><span>o</span><span>r</span><span>e </span><span>></span></h4></Link>
                </div>
                <div className="events-home">
                    <EventList events={events} atHome={true} />
                </div>
                <div className="group-title container">
                    <h2>Outdoor</h2>
                    <Link to="/event"> <h4><span>S</span><span>e</span><span>e </span><span>M</span><span>o</span><span>r</span><span>e </span><span>></span></h4></Link>
                </div>
                <div className="events-home">
                    <EventList events={events} atHome={true} />
                </div>
                <div className="group-title container">
                    <h2>Coding</h2>
                    <Link to="/event"> <h4><span>S</span><span>e</span><span>e </span><span>M</span><span>o</span><span>r</span><span>e </span><span>></span></h4></Link>
                </div>
                <div className="events-home">
                    <EventList events={events} atHome={true} />
                </div>
                <div className="group-title container">
                    <h2>gaming</h2>
                    <Link to="/event"> <h4><span>S</span><span>e</span><span>e </span><span>M</span><span>o</span><span>r</span><span>e </span><span>></span></h4></Link>
                </div>
                <div className="events-home">
                    <EventList events={events} atHome={true} />
                </div>

                <section className="about-preview">
                    <div>
                        <h2>Check Out A Random Event</h2>
                        <Link to="/login" className="btn btn-control">Be Spontaneous</Link>
                    </div>
                </section>
                <div className="group-title container">
                    <h2>Start Your Venue</h2>
                    {/* <Link to="/login"></Link> */}
                </div>
                <section className="categories container">
                    {this.state.categories.map((category, idx) => (
                        <div className="category-preview" key={idx}>
                            <Link to={`/event/category/${category.name}`}><i className={category.className}></i><p>{category.name}</p></Link>
                        </div>))}
                </section>
                <footer>
                    <Link className="logo large" to="/">VenYou </Link>
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
                        <span>© 2020 VenYou</span>
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
