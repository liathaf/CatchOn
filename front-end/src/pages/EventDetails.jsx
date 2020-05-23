import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { loadEvent, addReview } from '../store/actions/EventActions'
import { Review } from '../cmps/Review'


class _EventDetails extends Component {
    state = {
        currentScrollHeight: 0
    }

    componentDidMount() {
        const { eventId } = this.props.match.params;
        this.props.loadEvent(eventId);
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    handleScroll = () => {
        this.setState({ currentScrollHeight: window.scrollY })
    }

    onAddReview = (msg) => {

        const { event } = this.props;
        // const { user } = this.props;
        const review = {
            msg,
            user: {
                "_id": "u101",
                "fullName": "Orly Amdadi",
                "userName": "liron",
                "password": "tinkerbell",
                "isAdmin": true,
                "imgUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANEA8NDg8VDg8PDQ0OEA0QDw8NEBIQFRIWGBQSFRUYHigiGRolGxUTIjEhJSk3Li4uFx8zODMsOCgtLisBCgoKDg0OGxAQGysmIB8tLS0rLSsuLS0tLS0tLS0tKy0tKy0uNystLS0tLSstLystLS0tLS0tLS0rLS03Ky0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQUGBAMC/8QAPRABAAIBAQQFCQUFCQAAAAAAAAECAxEEBSExBhJBUXETIjJSYXKBkbFCobLB0SMzYoKSFiQ0Q1NzouHw/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAMBAQADAQEAAAAAAAAAAQIRMQNBITJRExL/2gAMAwEAAhEDEQA/ANmA7GIAAAAAAAAAAIASJx0tadKxNp7oiZn7nZi3Rnt/l6e9Na/dzRbInTiFpG4M2ms2pXxtP6Ku0aTMa66TMaxy+BLLw0CEpQAAAAAAAAAAAAAAAAAAISgB6YNnvlnq0rNp9nKPGexbbs3JN4i+bWteynK0+Pcv8WKtI6tKxWI7IjRnl6ScWmKi2bo9M8ct+r/DXjPzlZ7PurDj5Ui0+tfzp+/g7Rjc7V9RFaxHCI0juiNEgqlR9JcmSIrWNYxzHnTHKba8ImWfbu9YtExMaxPCYnjEqDem5NNb4I1jtx85/l7/AAbeec4plFGBDZRIAAAAAAAAAAAAAAAAAIXm4N2xbTPkjWPsVn8UqjZcPlL0x+taIbatYrERHCIiIiPZDL0y1NL4xIDBcAAAAABTb73X14nNjjzo42rH2o749v1ZxvGU37ssYsszHo3jrxHdOvGPn9W3nl8Uyn1XgNlAAAAAAAAAAAAAABCUSDt3N+/xe9P4Za9ktxxrtGP+af8AjLWsPXrTHgAyWAAAAAAFD0pj9zP+5H4V8o+lPo4vev8ASF/P9kZcZ9KEulkAAAAAAAAAAAAAAISgFhuGP7xTwv8AhlrGV6Pfv6+7f6NU5/XrTHgAzWAAAAAAFH0p9HF71/pC8UfSn0cXvX+kL+f7Iy4z6UQl0sgAAAAAAAAAAAAABCUAsej/APiKe7f8MtW4NyVr5DHMRGultZ0jXXrTq73Nnd1rjPwAKJAAAAAAFH0p9HF71/pC8eG27PTJWfKViYrFpie2OHOFsbq7ReMUlEJdTIAAAAAAAAAAAAAAQlANX0fvrgrHq2vX79fzWKj6MZuGTH2xMXiPZPCfy+a8cuc1lWs4AKpAAAAAAHjtturjyT3Y7/hl7ODfuWKYLx220pHxn9IlMm6VkoSiEutiAAAAAAAAAAAAAAIlID02XPOK9clZ06sx8Y7YbeJ14xyniwbZbrydfDinXXzIifGOH5MfWfV8XUAxXAAAAAAGV3/tU5Ms0183H5sR7ftT+XwajJeKVm08qxNp8Ihh8t5ta1p52tNp8ZnVr5T87Vyr5hKIS3ZgAAAAAAAAAAAAAAAC+6NbXwtgnnr16/nH5/NQppeazFqzpMTrEx2SrljuaTLpuhzbt2mc2KuSY0mdYnu1idNXS5rNNQBAAAAAqekW19TH5KPSyc/ZWJ4/+8WZe+37TOXJa898xEd1Y5Q8HVhjqMrd0SCyAAAAAAAAAAAAAAAEAlAA1+5adXBj9sTb5zMu14bBTq4sde7HT6PdyXraACAAAABhLc58ZQSOxikAAAAAAAAAAAAAAEAAANFuXdmOccZMlYvN9ZjXjERE6RwZ6lZtMVjjMzERHtlttlw+TpTH6tYjXvntll63UWxj1gBg0AAAAAAUO/8Ad9KUjLSsVmLRFojhExPbooWz3ls/lsV8cc5jWPGJ1j6MZPB0ed3GeUSA0VAAAAAAAAAAEJQADv2TdGbLx6vUr61+Hyjmi2TqXA9tm2TJlnTHSbe3lHz5NFsm48WPSbftLfxcK/0/qtIjThHCI7I4Qzvr/Fpipt2blnFauTJaJmvGKRHDXxXIMblb1aTQAhIAAAAAAo947jm1rZMVo86ZtNLcOM89JXgnHKziLNsRn2a+KdL0mvjHD4TyebdWrExpMaxPOJjWFZtW48V+NNcc/wAPGvy/RtPWfVbizA79r3RmxazFfKV9anH5xzcDSWXioAlAAAAAIWuw7jvk0tk/Z17vtz8Oz4otk6mTarjjwjjPdzWux7iyX0nJ+zr3c7/Ls+K+2TYceGPMrpPrTxtPxdDHL1/i8xcmybtxYdJrXW0fbt51v+vg6wZ27WAEAAAAAAAAAAAAAAA5dr3fizenXj68cLfPt+LqEy6Gb2zcN68cU+Uj1Z0i36SqL0mszW0TWY5xMaS3by2jZqZY0yVi0e3nHhPY0x9b9VuLEC723cE11thnrR6ltIt8J7VNkpNZmtomsxziY0ltMpeKWaQIEoazdu6qYNLT5+T155R7sdiwByW29bACAAAAAAAAAAAAAAAAAAAAAAAc+27HTPXq3jj2W7Yn2OgJdDPf2cv/AKtf6ZQ0Qv8A6ZI/5gAokAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",
                "rank": 5
            }
        }

        this.props.addReview(event._id, review);
    }

    render() {
        const { event } = this.props;
        const top = (this.state.currentScrollHeight > 400) ? (this.state.currentScrollHeight) - 400 : 0;

        return (
            (event) &&
            <section className="event-detail">

                <div className="event-gallery">
                    {event.imgUrls.map((url, idx) => <div key={idx}
                        style={{ backgroundImage: `url(${url})` }}></div>)}
                </div>


                <div className="event-main">
                    <div className="middle-content">
                        <div className="side-content" style={{ marginTop: top }}>
                            <p className="lead">${event.price}{event.startAt}</p>
                        </div>
                        <div className="all-content">
                            <div className="event-detail-top">
                                <div>
                                    <h1 className="large">{event.title}</h1>
                                    <p>{event.place}</p>
                                </div>
                                <div className="user-preview">
                                    <img className="userImg-details" src={event.createdBy.imgUrl} />
                                    <p>{event.createdBy.userName}</p>
                                    {/* <p>{event.createdBy.rank}</p> */}
                                </div>
                            </div>

                            <div className="line"></div>

                            <h2>What we're about</h2>
                            <p>{event.desc}.
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eaque consequuntur atque. Doloremque, molestias debitis vel eligendi itaque eius quia culpa, minima       quisquam hic dolorum sint accusamus explicabo iusto in?
                        </p>
                            <p>{event.createdAt}</p>
                            <p>{event.capacity}</p>
                            <p>{event.attendees[0].userName}</p>
                            <img className="userImg-details" src={event.attendees[0].imgUrl} />
                            <div className="event-chat">
                                <h2>Reviews</h2>
                                <Review onAddReview={this.onAddReview} reviews={event.reviews} />
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
        event: state.events.currEvent,
        user: state.users.loggedInUser
    }
}

const mapDispatchToProps = {
    loadEvent,
    addReview
}

export const EventDetails = connect(mapStateToProps, mapDispatchToProps)(_EventDetails)