import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment'
import { MyMapComponent } from '../cmps/Map';
import { loadEvent, addReview, saveEvent } from '../store/actions/EventActions';
import { Review } from '../cmps/Review';
import { GeolocationService } from '../services/GeolocationService';
import { SocketService } from '../services/SocketService';



class _EventDetails extends Component {

    state = {
        currentScrollHeight: 0,
        display: 'grid',
        loc: null,
    };


    componentDidMount() {

        SocketService.setup();
        const { eventId } = this.props.match.params;
        SocketService.on('new review', this.props.loadEvent(eventId));
        window.addEventListener('scroll', this.handleScroll, { passive: true });

    }

    componentDidUpdate() {
        const { event } = this.props;
        //Map
        if (event && !this.state.loc) {
            GeolocationService.getLatLng(event.place).then((loc) =>
                this.setState({ loc })
            );

        }

        // Review
        const { eventId } = this.props.match.params;
        // work only on componentDidUpdate , why?
        SocketService.on('new review', this.props.loadEvent(eventId));
    }

    componentWillUnmount() {
        SocketService.off();
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
        const { event } = this.props;
        var { user } = this.props;
        const review = {
            msg,
            user
        }
        await this.props.addReview(event, review);
        SocketService.emit('added new review');

    }

    onToggleLike = async ({ target }) => {

        const { event, user } = this.props;
        if (target.style.color === 'black') {
            // this.setState({isLiked: 'blue'})
            target.style.color = 'blue';
            event.likes.push(user._id)
            await this.props.saveEvent(event)
        } else {
            // this.setState({isLiked: 'black'})
            target.style.color = 'black';
            const idx = event.likes.find(userInArr => (userInArr === user._id))
            event.likes.splice(idx, 1);
            await this.props.saveEvent(event)
        }

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
                                    <Link to="/login">
                                        <span className="btn btn-primary">
                                            Join
                                        </span>
                                    </Link>
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
                                    <Link to={`/user/${event.createdBy._id}`}>
                                        <div className="user-preview">
                                            <img
                                                className="userImg-details"
                                                src={event.createdBy.imgUrl} />
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
                                    {/* {this.props.user &&
                                        <div>
                                            <i onClick={this.onToggleLike} className="fas fa-heart" style={{ color: (event.likes.find(userId => userId === user._id)) ? 'blue' : 'black' }} />   {event.likes.length}
                                        </div>} */}
                                    <div className="event-chat">
                                        <h2>Reviews</h2>
                                        <Review
                                            onAddReview={this.onAddReview}
                                            reviews={event.reviews}
                                        />
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
};

export const EventDetails = connect(mapStateToProps, mapDispatchToProps)(_EventDetails);


