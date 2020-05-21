import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import { ReactRedux } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/EventActions'
import { EventList } from '../cmps/EventList';


import Review from '../cmps/Review'

class Home extends Component {

        state = {
            categories: ['Sport', 'Outdoors', 'Traveling', 'Culinery', 'Video games', 'Coding']
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
                <section className="categories">

                    {this.state.categories.map((category , idx) => (<Link className="btn btn-success btn-cat" key={idx} to={`/event/${category}`}>{category}</Link>))}
                    </section>

                    <EventList events={events} />
                    {(events) && <Review/>}
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