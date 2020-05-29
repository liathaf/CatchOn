import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import avatar from '../img/avatar.jpg'

import moment from 'moment'
import { MyMapComponent } from '../cmps/Map';
import { GeolocationService } from '../services/GeolocationService';

import { loadEvent, addReview, saveEvent } from '../store/actions/EventActions';
import { UserService } from '../services/UserService'
import { EventService } from '../services/EventService'
import { updateUser } from '../store/actions/UserActions';
import { Review } from '../cmps/Review';
import { SocketService } from '../services/SocketService';
import {ReactComponent as Like} from '../img/icons/like.svg'
import { Modal } from '../cmps/Modal'



class _EventDetails extends Component {

    state = {
        currentScrollHeight: 0,
        display: 'grid',
        loc: null,
        isAttend: false,
        isOpenModal: false
    };


    componentDidMount() {

        SocketService.setup();
        const { eventId } = this.props.match.params;
        this.loadEvent(eventId)

        SocketService.on('new review', this.loadEvent);
        // todo: react about 'passive' https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        const { event } = this.props
        const { user } = this.props
        const isAttend = (user) ? UserService.isAttend(user, eventId) : ''
        this.setState({ isAttend })
    }


    loadEvent = () => {
        const { eventId } = this.props.match.params;
        this.props.loadEvent(eventId)
    }

    componentDidUpdate() {
        const { event } = this.props;
        //Map
        if (event && !this.state.loc) {
            GeolocationService.getLatLng(event.place).then((loc) =>
                this.setState({ loc })
            );

        }
    }

    componentWillUnmount() {
        SocketService.off('new review', this.loadEvent);
        window.removeEventListener('scroll', this.handleScroll);

    }

    handleScroll = () => {
        if (window.visualViewport.width > 960) {
            this.setState({ currentScrollHeight: window.scrollY });
        } if (window.pageYOffset > 500 && window.visualViewport.width < 960) {
            this.setState({ display: 'none' });
        } else {
            this.setState({ display: 'grid' });
        }
    };

    onAddReview = async (msg) => {
        var { user, event } = this.props;
        const review = {
            msg,
            user
        }
        await this.props.addReview(event, review);
        SocketService.emit('added new review');

    }

    onAddAttend = async () => {

        var { user, event } = this.props
        const { isAttend } = this.state
        if (!user || event.price !== 0) {
            
            this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }))
            return
        }
        if (!isAttend) {
            user.attendedEvents.push({
                _id: event._id,
                title: event.title,
                imgUrl: event.imgUrls[0]
            });
            event.attendees.push(user);
        } else {
            user.attendedEvents.splice(UserService.findIdxById(user, event._id), 1);
            event.attendees.splice(EventService.findIdxById(event, user._id), 1);
        }
        await this.props.updateUser(user)
        await this.props.saveEvent(event)
        this.setState(prevState => ({ isAttend: !prevState.isAttend }))
    }

    onRemoveModal = () =>{
        this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }))
    }


    onToggleLike = async ({ target }) => {
        
        if (target.viewBox) return
        const { event, user } = this.props;
        if (target.style.fill === 'rgb(72, 72, 72)') {
            target.style.fill = 'rgb(243, 69, 115)';
            event.likes.push(user.username)

        } else {
            target.style.fill = 'rgb(72, 72, 72)';
            const idx = event.likes.find(userInArr => (userInArr === user.username))
            event.likes.splice(idx, 1);
        }
        await this.props.saveEvent(event)
    }

    render() {
        const { event, user } = this.props;
        
        const top =
            this.state.currentScrollHeight > 360
                ? this.state.currentScrollHeight - 360
                : 0;

        return (


            event && (
                <section className="event-detail">
                    <div className="image-slide">
                        <div className="event-gallery">
                            {event.imgUrls.map((url, idx) => (
                                <div key={idx} style={{ backgroundImage: `url(${url})` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="event-main">
                        <div className="middle-content">
                            <div className="side-content" style={{ marginTop: top, display: this.state.display }}>
                                <div className="top-side">
                                    <p>{event.place}</p>
                                    <p>{moment.unix(event.startAt).format("LLL")}</p>
                                </div>
                                <div className="join">
                                    <h2>{event.title}</h2>
                                    <p className={`event-price ${(event.price === 0) ? 'free' : ''}`}>
                                        {(event.price === 0) ? "Free" : "$" + event.price}
                                    </p>

                                    <span className={`btn btn-primary ${(this.state.isAttend) ? 'attend' : ''}`} onClick={this.onAddAttend}>
                                        {(this.state.isAttend) ? 'Leave' : 'Join'}
                                    </span>

                                </div>
                                {/* <p className="createdAt">created at: {event.createdAt}</p> */}
                                {/* <p>2/{event.capacity}</p> */}
                            </div>
                            <div className="all-content">
                                <div className="event-detail-top">
                                    <div>
                                        <h1 className="large">{event.title}</h1>
                                        <p>{event.place}</p>
                                    </div>

                                    {this.props.user &&
                                        <div className="likeBtn">
                                            <Like onClick={this.onToggleLike}  style={{ fill: (event.likes.find(userName => userName === user.username)) ? 'rgb(243, 69, 115)' : 'rgb(72, 72, 72)' }} />   
                                            <p>{event.likes.length}</p>
                                        </div>}


                                    <Link to={`/user/${event.createdBy._id}`}>
                                        <div className="user-preview">
                                            <img
                                                className="userImg-details"
                                                src={(event.createdBy.imgUrl) ? event.createdBy.imgUrl : avatar} />
                                            <p>{event.createdBy.username}</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="line"></div>

                                <h2>What we're about</h2>
                                <p>
                                    {event.desc}
                                </p>
                                <div className="bottom-event-content">
                                    <div className="attendees">
                                        <h2>Attendees</h2>
                                        {event.attendees.map((attendee, idx) => (
                                            <Link to={`/user/${attendee._id}`} key={idx}>
                                                <img
                                                    className="attendees-details"
                                                    src={attendee.imgUrl}>
                                                </img>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="map">
                                        {this.state.loc && (
                                            <MyMapComponent
                                                isMarkerShown
                                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyADuPfbNl1fArD6HxZl0O_qsDUmwNLfIPY"
                                                loadingElement={<div style={{ height: `100%` }} />}
                                                containerElement={
                                                    <div style={{ height: `45vh` }} />
                                                }
                                                mapElement={<div style={{ height: `100%` }} />}
                                                lat={this.state.loc.lat}
                                                lng={this.state.loc.lng}
                                            />
                                        )}
                                    </div>
                                   
                                    <div className="event-chat">
                                    <h2>Reviews</h2>
                                    <Review
                                        onAddReview={this.onAddReview}
                                        reviews={event.reviews}
                                    />
                                    {(this.state.isOpenModal) && <Modal event={event} onRemoveModal={this.onRemoveModal} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.events.currEvent,
        user: state.users.loggedInUser,
    };
};

const mapDispatchToProps = {
    loadEvent,
    saveEvent,
    addReview,
    updateUser,
    saveEvent
};

export const EventDetails = connect(mapStateToProps, mapDispatchToProps)(_EventDetails);