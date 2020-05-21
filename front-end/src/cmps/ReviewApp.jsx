import React, { Component } from 'react'
import { connect } from 'react-redux';

import { loadEvent } from '../store/actions/eventActions'

class ReviewApp extends Component {

    state = {
        msg: '',

    }

    componentDidMount() {
        // const {eventId} = this.props.match.params;
        // this.props.loadEvent(eventId);
        this.props.loadEvent(1);
        // this.props.loadUser(1);

    }

    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState({ [field]: value } , ()=>(console.log(this.state)))
    }



    onHandelSubmit = (ev) => {
        ev.preventDefault();

    }

    render() {
        return (
            <form className="review-app" onSubmit={this.onHandelSubmit}>
                <input className="review-input" name="msg" placeholder="write massege..." onChange={this.onHandleChange}></input>
                <button className="send-msg-btn">Send</button>
            </form>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        event: state.events.currEvent
    }
}

const mapDispatchToProps = {
    loadEvent,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewApp)

// "reviews": [{"id": "u101" ,"userId": "2","msg": "it was awesome","createdAt": "05-02-2020 16:49", "rate": 4 }]