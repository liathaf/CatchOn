import React, { Component } from 'react'
import { connect } from 'react-redux';

import { loadEvent , addReview } from '../store/actions/EventActions'

class Review extends Component {

    state = {
         msg: '',

    }

    componentDidMount() {
        // const {eventId} = this.props.match.params;
        // this.props.loadEvent(eventId);
        this.props.loadEvent(1);

    }

    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState({ [field]: value })
    }



    onHandelSubmit = (ev) => {
        ev.preventDefault();
        const { msg } = this.state;
        var { event } = this.props;
        // const { user } = this.props;
        const review = {
            msg,
            user : 'user'
        }

        this.props.addReview(event._id , review);

    }

    render() {
        return (
            <form className="review-app" onSubmit={this.onHandelSubmit}>
                <input className="review-input" name="msg" placeholder="write massege..." onChange={this.onHandleChange}></input>
                <button className="send-msg-btn">Send</button>
            </form>
            // <ReviewList/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Review)

    // "reviews":  [{"id": "u101" ,"msg": "dont like this event","createdAt": "05-02-2020 16:49", "user" : { "_id": "3" ,"rate": 4 , "imgUrl": "imgUrl"  , "userName": "sara" }}]