import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import { EventList } from '../cmps/EventList';

export class Home extends Component {
    render() {
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
            <section className="labels">
                <Link className="btn btn-success btn-cat" to="">Sport</Link>
                <Link className="btn btn-success btn-cat" to="">Outdoors</Link>
                <Link className="btn btn-success btn-cat" to="">Traveling</Link>
                <Link className="btn btn-success btn-cat" to="">Culinery</Link>
                <Link className="btn btn-success btn-cat" to="">Video games</Link>
                <Link className="btn btn-success btn-cat" to="">Coding</Link>
            </section>
            <section className="previewEvents">
            {/* <EventList events={ events }/> */}
            </section>
            </>

        )
    }
}


