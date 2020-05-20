import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import { ReactRedux } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../store/actions/eventActions'
import { EventList } from '../cmps/EventList';

class Home extends Component {
    
    // state = {
    //     labels: [ 'Sport ']
    // }

    componentDidMount() {
        this.props.loadEvents();
    }

    render() {
        console.log(this.props);
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
            <section className="labels">
              
                <Link className="btn btn-success btn-cat" to="">Sport</Link>
                <Link className="btn btn-success btn-cat" to="">Outdoors</Link>
                <Link className="btn btn-success btn-cat" to="">Traveling</Link>
                <Link className="btn btn-success btn-cat" to="">Culinery</Link>
                <Link className="btn btn-success btn-cat" to="">Video games</Link>
                <Link className="btn btn-success btn-cat" to="">Coding</Link>
            </section>
            <section className="previewEvents">
                <EventList events={events} />
            </section>
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