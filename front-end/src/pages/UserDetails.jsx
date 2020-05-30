import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { loadUser } from '../store/actions/UserActions'
import avatar from '../img/avatar.jpg'



class _UserDetails extends Component {

    componentDidMount() {
        const { userId } = this.props.match.params;
        this.props.loadUser(userId);
    }

    render() {
        const { user } = this.props;
      
        return (
            (user) &&
            <section className="container">
                <div className="profile">
                    <div className="profile-top">

                        <h2 className="text-primary">{user.username}</h2>
                        <div className="main-profile">
                            <img src={(user.imgUrl) ? user.imgUrl : avatar} />

                            <div className="icons-desc-container">
                                <p className="user-desc">{user.dsc}</p>
                                <div className="icons">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter fa-2x"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook fa-2x"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin fa-2x"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-youtube fa-2x"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="profile-about">
                         
                           
                            <div className="profile-event">
                                <div className="attended-events"> 
                                    <h1>
                                        <i className="fas fa-calendar-week"></i> {`${user.username.split(' ')[0]}'s Events`}
                                    </h1>
                                    <div className="line"></div>
                                    {user.attendedEvents.map((event , idx) => {
                                        if (idx < 2) return (<div className="event" kay={event._id}>
                                            <Link to={`/event/${event._id}`}>
                                                <h4 className="event-title">{event.title}</h4>
                                                <img className="event-img-user-details" src={event.imgUrl}></img>
                                                <p className="user-desc">{event.desc.split('.')[0]}</p>
                                            </Link>
                                        </div>)
                                    })}
                                </div>

                                <div className="attended-events"> 
                                    <h1>
                                        <i className="fas fa-calendar-week"></i>{` ${user.username.split(' ')[0]}'s created Events`}
                                    </h1>
                                    <div className="line"></div>
                                    {user.createdEvents.map((event , idx) => {
                                        if (idx < 2) return (<div className="event" kay={event._id}>
                                            <Link to={`/event/${event._id}`}>
                                                <h4 className="event-title">{event.title}</h4>
                                                <img className="event-img-user-details" src={event.imgUrl}></img>
                                                <p className="user-desc"> {event.desc.split('.')[0]}</p>
                                            </Link>
                                        </div>)
                                    })}
                                </div>
                        </div>

                    </div>


                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users.currUser
    }
}

const mapDispatchToProps = {
    loadUser
}

export const UserDetails = connect(mapStateToProps, mapDispatchToProps)(_UserDetails)

